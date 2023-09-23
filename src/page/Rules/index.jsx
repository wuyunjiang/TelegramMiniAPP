import { NavBar } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import "../../style/Rules.css";

function Rules() {
  const navigate = useNavigate();

  const back = () => navigate("/");

  return (
    <div className="page rules_page">
      <NavBar onBack={back}>规则说明</NavBar>
      <div className="body">
        <section>
          <h3>游戏规则</h3>
          <p>玩家通过长按屏幕，控制杆长度，使得杆顺时针倒下时候，正好搭在下一个台子上，保证小人安全通过沟壑，否则失败结束这局游戏</p>
          <p>当玩家获得最佳分数时，系统提示保存分数，并消耗<b>10</b>个金币，不保存则不消耗</p>
          <p>系统每天<b>00:00</b>点进行一次结算，将今日所有消耗的金币奖励给所有排行榜前<b>50%</b>玩家</p>
        </section>
        <section>
          <h3>奖励详情</h3>
          <p>每日所有收入全部返还给玩家</p>
          <p>排名前<b>50%</b>的玩家，平分所有金币的<b>50%</b></p>
          <p>排名前<b>30%</b>的玩家，额外平分所有金币<b>15%</b></p>
          <p>排名前<b>15%</b>的玩家，额外平分所有金币<b>15%</b></p>
          <p>排名前<b>5%</b>的玩家，额外平分所有金币<b>10%</b></p>
          <p>第 3 名玩家，额外获得所有金币<b>2%</b></p>
          <p>第 2 名玩家，额外获得所有金币<b>3%</b></p>
          <p>第 1 名玩家，额外获得所有金币<b>5%</b></p>
        </section>
      </div>
    </div>
  );
}

export default Rules;
