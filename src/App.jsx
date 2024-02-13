import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificaitonAtom, totalNotificationSelector } from "./atoms";
import { useMemo } from "react";

function App() {
  

  return (
    <>
    <RecoilRoot>
       <Main /> 
     </RecoilRoot>
    </>
  );
}

function Main(){
  const networkNotificatoinCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const NotificationCount = useRecoilValue(notificaitonAtom);
  // const [messageCount,setMessageCount] = useRecoilState(messagingAtom);
  // syntax is same for selector and atom 

  const totalNotificationCount = useRecoilValue(totalNotificationSelector) ;


  // instade of using useMemo i use recoil selector.
  // const totalNotificationCount = useMemo(()=>{
  //   return networkNotificatoinCount + jobsCount + messageCount + NotificationCount
  // },[networkNotificatoinCount,jobsCount,messageCount,NotificationCount])
  
  return<>
   <div>
      <button>Home</button>
      <button>My Network ({networkNotificatoinCount >= 100 ? "99+": networkNotificatoinCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notification({NotificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
     </div>
  </>
}

export default App;
