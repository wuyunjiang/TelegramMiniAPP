import axios from 'axios'
import API from './api'

export const createInviteCode = async (params) => {
  return axios.post(API.create_invitation_code, params)
}

export const getInviteCodes = async () => {
  return axios.post(API.unused_invitation_code)
}

export const getInviteUsers = async () => {
  return axios.post(API.invitations)
}
