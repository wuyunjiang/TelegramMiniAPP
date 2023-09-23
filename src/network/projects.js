import axios from 'axios'
import API from './api'

export const getProjectsList = async (params) => {
  return axios.post(API.projects_list, params)
}
