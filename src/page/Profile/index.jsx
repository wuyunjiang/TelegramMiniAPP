import { NavBar, Toast, Space, Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import defaultUser from "../../assets/defaultUser.svg";

import "../../style/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const back = () => navigate("/");

  const buyAmount = () => {
    Toast.show({ content: "开发中..." })
  }

  const sellAmount = () => {
    Toast.show({ content: "开发中..." })
  }


  return (
    <div className="page profile_page">
      <NavBar onBack={back}>个人中心</NavBar>
      <div className="body">
        <img className="verify_icon" src={defaultUser} alt="" />
        <div className="name">姓名</div>
        <div className="amount">金币：{10}</div>
        <Space direction='vertical' className='action'>
          <Button onClick={buyAmount}>购买金币</Button>
          <Button onClick={sellAmount}>出售金币</Button>
        </Space>
      </div>
    </div>
  );
}

export default Profile;
