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
import { fetchSample } from "~/app/actions";

let store: IStore | undefined;

const Store = types
  .model({
    lastUpdate: types.Date,
    light: false,

    user: types.optional(User, {
      name: "Anil Kumar",
      email: "garidipurianil1@gmail.com",
      userProfileStatus:'PENDING',
      userRole:'BUYER',
      userProfile:'FPC-ESTATE',
      status:200
    }),

    data: types.optional(types.frozen(), {}),
  })
  .actions((self) => {
    let timer: any;
    const start = () => {
      timer = setInterval(() => {
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
      // const response = yield SignInAction(inputs);
      // console.log(response,"Outside response")
      // if(response.status === 400){
      //   return response
      // }else if(response.status === 200){
      //   self.user = response;
      //   return response
      // }
    });

    const signUp = flow(function* callServerAction(inputs) {
      // const user = yield SignUpAction(inputs);
      // self.user = user;
    });

    const uploadDocumetsAction = flow(function* callServerAction(inputs) {
      // const respose = yield UploadDocumets(inputs);
      // console.log(respose,"respose")
      // self.user = respose;
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
