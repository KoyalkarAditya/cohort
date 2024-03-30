import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notificationsAtom } from "./atom";
import { totalNotificationsSelector } from "./selector";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
  function MainApp() {
    const [notificationsOb, setNotifications] =
      useRecoilState(notificationsAtom);
    const totalNotifications = useRecoilValue(totalNotificationsSelector);
    const { network, jobs, messaging, notifications } = notificationsOb;
    return (
      <div>
        <button>Home</button>
        <button>My Network {network >= 100 ? "99+" : network}</button>
        <button>Jobs {jobs}</button>
        <button>Messages {messaging}</button>
        <button>Notifications {notifications}</button>
        <button>Me {totalNotifications}</button>
      </div>
    );
  }
}

export default App;
