import axios from "axios";
import { atom, selector } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 108,
// });

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 0,
// });

// export const notificaitonAtom = atom({
//   key: "notificaitonAtom",
//   default: 12,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 0,
// });


// above all 4 atom consolidate in single atom below

// export const notificationCounter = atom({
//   key:"notificationCounter",
//   default:{
//     network:104,
//     jobs:0,
//     notifcation : 3,
//     message:0
//   }
// })


export const notificationCounter = atom({
  key:"notificationCounter",
  default : selector({
    key:"notificationCounterSelector",
    get : async ()=>{
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data
    }
  })
}) 


// selector 
export const totalNotificationSelector = selector({
  key:"totalNotificationSelector",
  get:({get})=>{
    const notificationTotal = get(notificationCounter);
    return notificationTotal.notifcation + notificationTotal.jobs + notificationTotal.message + notificationTotal.network ;
  }
})


// selector define
// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: (props) => {
//     const networkCount = props.get(networkAtom);
//     const jobsCount = props.get(jobsAtom);
//     const notificationCount = props.get(notificaitonAtom);
//     const messageCount = props.get(messagingAtom);

//     return networkCount + jobsCount + notificationCount + messageCount;
//   },
// });
