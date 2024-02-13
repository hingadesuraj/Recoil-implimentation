import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom } from "./atoms";

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
  return<>
   <div>
      <button>Home</button>
      <button>My Network ({networkNotificatoinCount >= 100 ? "99+": networkNotificatoinCount})</button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notification</button>
      <button>Me</button>
     </div>
  </>
}

export default App;
