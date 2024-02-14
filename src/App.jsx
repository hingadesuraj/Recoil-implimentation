import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationCounter, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}

function Main() {
  const notifications = useRecoilValue(notificationCounter);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <div>
        <button>Home</button>
        <button>
          My Network (
          {notifications.network >= 100 ? "99+" : notifications.network})
        </button>
        <button>Jobs({notifications.jobs})</button>
        <button>Messaging({notifications.message})</button>
        <button>Notification({notifications.notifcation})</button>
        <button>Me ({totalNotificationCount})</button>
      </div>
    </>
  );
}

export default App;
