import { selector } from "recoil";
import { notificationsAtom } from "./atom";
export const totalNotificationsSelector = selector({
  key: "avatarSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);
    const { network, jobs, notifications, messaging } = allNotifications;
    return network + messaging + jobs + notifications;
  },
});
