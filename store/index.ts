import { useMemo } from "react";
import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
  flow,
} from "mobx-state-tree";
import User from "./User";
import { fetchSample,SignInAction, SignUpAction,UploadDocumets } from "~/app/actions";

let store: IStore | undefined;

const Store = types
  .model({
    lastUpdate: types.Date,
    light: false,

    user: types.optional(User, {
      name: "Anil Kumar",
      email: "garidipurianil1@gmail.com",
      role:"buyer",
      isSignedIn:false,
      isDocsUpload:false,
      isDocsVerify:false,
    }),

    data: types.optional(types.frozen(), {}),
  })
  .actions((self) => {
    let timer: any;
    const start = () => {
      timer = setInterval(() => {
        // mobx-state-tree doesn't allow anonymous callbacks changing data.
        // Pass off to another action instead (need to cast self as any
        // because typescript doesn't yet know about the actions we're
        // adding to self here)
        (self as any).update();
      }, 1000);
    };
    const update = () => {
      self.lastUpdate = new Date(Date.now());
      self.light = true;
    };
    const stop = () => {
      clearInterval(timer);
    };
    const fetchJson = flow(function* fetchJson() {
      const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = yield res.json();
      self.data = data;
    });

    const callServerAction = flow(function* callServerAction() {
      const data = yield fetchSample();
      self.data = data;
    });

    const signIn = flow(function* callServerAction(inputs) {
      const user = yield SignInAction(inputs);
      self.user = user;
    });

    const signUp = flow(function* callServerAction(inputs) {
      const user = yield SignUpAction(inputs);
      self.user = user;
    });

    const uploadDocumetsAction = flow(function* callServerAction(inputs) {
      const user = yield UploadDocumets(inputs);
      console.log(user,"action")
      self.user = user;
    });

    return { start, stop, update, fetchJson, callServerAction, signIn, signUp,uploadDocumetsAction };
  });

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({ lastUpdate: new Date() });

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState: any = null) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
