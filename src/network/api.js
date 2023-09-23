const baseURL = ''

const API = {
  login: `${baseURL}/market/login`, //登录
  logout: `${baseURL}/market/logout`, //登出
  register: `${baseURL}/market/register`, //注册
  send_email: `${baseURL}/market/send_email`, //发送邮箱验证码
  reset_password: `${baseURL}/market/reset_password`, //发送邮箱验证码
  //忘记密码
  projects_list: `${baseURL}/market/projects/list`, //项目列表
  products: `${baseURL}/market/products`, //商品列表
  products_detail: `${baseURL}/market/products/detail`, //商品详情
  products_sell: `${baseURL}/market/products/sell`, //出售商品
  create_order: `${baseURL}/market/create_order`, //购买商品
  cancel_order: `${baseURL}/market/cancel_order`, //放弃购买
  // buyer_payment_confirm: `${baseURL}/market/buyer_payment_confirm`, // 买家确认支付保证金
  // seller_payment_confirm: `${baseURL}/market/seller_payment_confirm`, //卖家确认支付保证金
  purchased_products: `${baseURL}/market/purchased_products`, //已购买的商品
  order_details: `${baseURL}/market/order_details`, //查看订单详情
  posted_products: `${baseURL}/market/posted_products`, //已上架的商品
  confirm_delivery: `${baseURL}/market/confirm_delivery`, //卖家确认发货
  //下架商品
  confirm_receipt: `${baseURL}/market/confirm_receipt`, //买家确认收货
  personal_infos: `${baseURL}/market/personal_infos`, //查询个人信息
  create_invitation_code: `${baseURL}/market/create_invitation_code`, //创建邀请码
  invitations: `${baseURL}/market/invitations`, //查询已邀请用户
  unused_invitation_code: `${baseURL}/market/unused_invitation_code`, // 未使用邀请码
}
export default API
