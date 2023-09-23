import axios from 'axios'
import API from './api'

export const getOrder = async (params) => {
  return axios.post(API.order_details, params)
}

export const cancleOrder = async (params) => {
  return axios.post(API.cancel_order, params)
}

// export const buyerConfirmOrder = async (params) => {
//   return axios.post(API.buyer_payment_confirm, params)
// }

// export const sellerConfirmMargin = async (params) => {
//   return axios.post(API.seller_payment_confirm, params)
// }

export const sellerConfirmDelivery = async (params) => {
  return axios.post(API.confirm_delivery, params)
}

export const buyerConfirmReceipt = async (params) => {
  return axios.post(API.confirm_receipt, params)
}
