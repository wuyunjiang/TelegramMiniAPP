import { sleep, handleMsg } from '../tool/index'
import { Toast } from 'antd-mobile'
import axios from 'axios'
import API from './api'

export const getEmailCode = async (params) => {
  return axios.post(API.send_email, params)
}

export const login = async (params) => {
  return axios.post(API.login, params)
}

export const logout = async () => {
  return axios.post(API.logout)
}

export const register = async (params) => {
  return axios.post(API.register, params)
}

export const forgetpwd = async (params) => {
  return axios.post(API.reset_password, params)
}

export const getMyList = async (action, params) => {
  const url = {
    buy: API.purchased_products,
    sell: API.posted_products,
  }[action]
  return axios.post(url, params)
}
