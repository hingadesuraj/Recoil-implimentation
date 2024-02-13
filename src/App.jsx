import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificaitonAtom } from "./atoms";

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
  
  return<>
   <div>
      <button>Home</button>
      <button>My Network ({networkNotificatoinCount >= 100 ? "99+": networkNotificatoinCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notification({NotificationCount})</button>
      <button>Me</button>
     </div>
  </>
}

export default App;
