import { TonConnectButton } from '@tonconnect/ui-react';
import { Button, Space, } from "antd-mobile";
import "../../style/Home.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate("/detail");
  };

  const goProfile = () => {
    navigate("/profile");
  };

  const goRules = () => {
    navigate("/rules");
  };

  return (
    <div className="page home_page">
      <div className='header'>
        <div className="header_l">
          <div>最佳分数: 0</div>
          <div>今日排名: 0</div>
        </div>
        <div className="header_r">
          <TonConnectButton />
        </div>
      </div>
      <div className="body">
        <Space direction='vertical' className='action'>
          <Button onClick={goDetail}>开始游戏</Button>
          <Button>排 行 榜</Button>
          <Button onClick={goProfile}>个人中心</Button>
          <Button onClick={goRules}>规则说明</Button>
        </Space>
      </div>
    </div >
  );
}

export default Home;
