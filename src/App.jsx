
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notification, notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>  
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  const networkCount = useRecoilValue(notification)

  // useEffect(() => {
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //     .then(res => {
  //       setNetworkCount(res.data)
  //     })
  // }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
