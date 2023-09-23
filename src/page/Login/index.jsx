import { useTonAddress, TonConnectButton } from '@tonconnect/ui-react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/LoginSign.css";

function Login() {
  const navigate = useNavigate();
  const tonAddress = useTonAddress();

  useEffect(() => {
    if (tonAddress) {
      if (location.search) {
        navigate(location.search.substring(1));
      } else {
        navigate("/");
      }
    }
  })

  return (
    <div className="page login_page">
      <TonConnectButton />
    </div>
  );
}

export default Login;
