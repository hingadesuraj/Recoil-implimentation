import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 108,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificaitonAtom = atom({
  key: "notificaitonAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

// selector define
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: (props) => {
    const networkCount = props.get(networkAtom);
    const jobsCount = props.get(jobsAtom);
    const notificationCount = props.get(notificaitonAtom);
    const messageCount = props.get(messagingAtom);

    return networkCount + jobsCount + notificationCount + messageCount;
  },
});
