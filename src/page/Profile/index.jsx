import { NavBar, Toast } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import telegramIcon from "../../assets/telegram.svg";
import verifyIcon from "../../assets/verify.svg";
import copyIcon from "../../assets/copy.svg";

import "../../style/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const back = () => navigate("/");

  const buyAmount = () => {
    Toast.show({ content: "已复制, 请在对应App中联系客服" })
  }

  const sellAmount = () => {
    Toast.show({ content: "已复制, 请在对应App中联系客服" })
  }


  return (
    <div className="page profile_page">
      <NavBar onBack={back}>个人中心</NavBar>
      <div className="body">
        <img className="verify_icon" src={verifyIcon} alt="" />
        <div className="name">姓名</div>
        <div className="amount">金币：{10}</div>
        <div>
          <div className="action" onClick={buyAmount}>
            <div className="value">购买金币</div>
          </div>
          <div className="action" onClick={sellAmount}>
            <div className="value">出售金币</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
