import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./page/Home/index";
import Login from "./page/Login/index";
import Profile from "./page/Profile/index";
import { Context } from "./context/index";
import Rules from "./page/Rules";
import Detail from "./page/Detail";

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const tonAddress = useTonAddress();

  useEffect(() => {
    const targetUrl = location.pathname + location.search;
    if (!tonAddress) {
      navigate(`/login?${targetUrl}`);
    } else {
      navigate("/")
    }
  }, []);
  if (!tonAddress) return <></>
  return (
    <Context.Provider value={{ userInfo }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
