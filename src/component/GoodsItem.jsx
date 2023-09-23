import { useEffect, useState } from "react";
import { Form, Button, Input, Avatar } from "antd-mobile";
import "../style/component/GoodsItem.css";
import tagIcon from "../assets/tag.svg";
import numberIcon from "../assets/number.svg";

function GoodsItem({ onClick, data }) {
  const {
    username,
    userAvatar,
    projectName,
    number,
    totalPrice,
    price,
    id,
    showStatus,
    status,
    orderId,
  } = data;

  const renderStatus = () => {
    if (!orderId) return "售卖中"
    else {
      switch (status) {
        case 0: return "买家取消"
        case 1: return "等买家支付"
        case 2: return "等卖家支付"
        case 3: return "等卖家发货"
        case 4: return "等买家收货"
        case 5: return "买家支付超时"
        case 6: return "卖家支付超时"
        case 7: return "卖家发货超时"
        case 8: return "买家收货超时"
        case 9: return "订单完成"
        default: break;
      }
    }
  }

  return (
    <div
      className="goods_item"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="user_info">
        <Avatar
          className="avatar"
          style={{ "--size": "18px", "--border-radius": "18px" }}
          src={userAvatar}
        />
        <div className="name">{username}</div>
        {showStatus && <div className="status">{renderStatus(orderId, status)}</div>}
      </div>
      <div className="project_info">
        <div className="left">
          <div className="name">{projectName}</div>
          <div className="detail">
            <img src={numberIcon} alt="" />
            <div>{`数量 ${number}`}</div>
            <div className="space"></div>
            <img src={tagIcon} alt="" />
            <div>{`总价 ${totalPrice}`}</div>
          </div>
        </div>
        <div className="right">
          <div className="price">{`${price} USDT`}</div>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
