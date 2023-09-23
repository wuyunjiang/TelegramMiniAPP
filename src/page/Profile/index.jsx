import { NavBar, Toast, Space, Button, Popup, Form, Stepper, Dialog } from "antd-mobile";
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import defaultUser from "../../assets/defaultUser.svg";

import "../../style/Profile.css";

function createTransaction(amount) {
  return {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: "EQCJmBV8uwMe-uOscZOZJlR79SazmbUDFmVwevt_ySeGbIQ6",
        amount: `${(0.1) * (10 ** 9)}`,
      },
      // {
      //   address: "EQBAkV45fqywDOfqGT8Fh0su-w_qvzDaQBNNgoGsHH8R4jLI",
      //   amount: `${(amount / 10) * (10 ** 9)}`,
      // }
    ]
  }
}

function Profile() {
  const navigate = useNavigate();
  const [tonConnectUI] = useTonConnectUI();
  const [submitAddrVisible, setSubmitAddrVisible] = useState(false)

  const back = () => navigate("/");

  const buyAmount = () => {
    setSubmitAddrVisible(true)
  }

  const sellAmount = () => {
    Toast.show({ content: "开发中..." })
  }


  const reConfirm = (values) => {
    Dialog.confirm({
      content: <div className="re_confirm_amount">
        <div className="title">请再次确认</div>
        <div className="content">你将购买 <b>{values.amount}</b> 金币，共花费 <b>{values.amount / 10}</b> TON</div>
      </div>,
      onConfirm: async () => {
        await handleBuy(values)
      },
    })
  }


  const handleBuy = async (values) => {
    const { amount } = values
    try {
      await tonConnectUI.sendTransaction(createTransaction(amount))
      Toast.show({ content: "购买完成" })
      setSubmitAddrVisible(false)
    } catch (error) {
      Toast.show({ content: "购买出错，请稍后再试" })
    }
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
      <Popup
        visible={submitAddrVisible}
        onMaskClick={() => {
          setSubmitAddrVisible(false);
        }}
        onClose={() => {
          setSubmitAddrVisible(false);
        }}
      >
        <div className="confirm_amount_pop">
          <Form
            layout='horizontal'
            onFinish={reConfirm}
            footer={
              <div>
                <Button block type="submit" color="primary">
                  确认并购买
                </Button>
              </div>
            }>
            <Form.Item name='amount' label='金币数量' childElementPosition='right' initialValue={10}>
              <Stepper step={10} min={10} />
            </Form.Item>
          </Form>
        </div>
      </Popup>
    </div>
  );
}

export default Profile;
