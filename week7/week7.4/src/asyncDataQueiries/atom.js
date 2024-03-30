import axios from "axios";
import { atom, selector } from "recoil";

//This works but there will be a slight delay as it first sets the default value here and fetch the data later and set the data
// export const notificationsAtom = atom({
//   key: "notification",
//   default: {
//     network: 0,
//     jobs: 0,
//     notifications: 0,
//     messaging: 0,
//   },
// });
export const notificationsAtom = atom({
  key: "notificationAtom",
  default: selector({
    key: "notificationAtomSelector",
    get: async () => {
      // await new Promise((r) => setTimeout(r, 2000)); //artificial delay
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
//If u know your atom's default value will be coming asynchronously then u have to use asynchronous data queries
