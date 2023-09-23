import axios from 'axios'
import API from './api'

export const getProducts = async (params) => {
  return axios.post(API.products, params)
}

export const createProduct = async (params) => {
  return axios.post(API.products_sell, params)
}

export const getDetail = async (params) => {
  return axios.post(API.products_detail, params)
}

export const buyProduct = async (params) => {
  return axios.post(API.create_order, params)
}
