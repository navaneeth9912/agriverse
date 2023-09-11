import {
  Instance,
  getSnapshot,
  getEnv,
  applySnapshot,
  types,
} from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import {
  LoginResponseModel,
  LoginResponseModelType,
} from "./LoginResponseModel";
// import { localStorageMixin } from "mst-gql";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.props({
  loggedInUser: types.optional(LoginResponseModel, {}),
})
  .actions((self) => {
    return {
      afterCreate() {
        let headers = {
          //Authorization: "5tfh",
        };
        let initialState = getSnapshot(self);
        // getEnv(self).gqlHttpClient.setHeaders(headers);
      },
      reset() {
        applySnapshot(self, {});
      },
      log() {
        console.log(JSON.stringify(self));
      },
      setLoggedInUser(user: LoginResponseModelType) {
        self.loggedInUser = user;
      },
    };
  })
  // .extend(
  //   localStorageMixin({
  //     throttle: 1000,
  //     storageKey: "appFluff",
  //   })
  // );
