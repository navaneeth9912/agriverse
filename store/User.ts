import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
  flow,
} from "mobx-state-tree";

const User = types.model({
  name: types.string,
  email: types.string,
  role: types.string,
  isSignedIn: types.boolean,
  isDocsUpload: types.boolean,
  isDocsVerify:types.boolean,
});

export default User;
