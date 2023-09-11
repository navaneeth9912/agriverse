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
  userProfileStatus: types.string,
  userRole: types.string,
  userProfile: types.string,
  status:types.number,
  
});

export default User;
