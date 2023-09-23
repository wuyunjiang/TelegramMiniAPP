import { Toast } from 'antd-mobile'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export const vw = (v = 1) => window.innerWidth * v
export const vh = (v = 1) => window.innerHeight * v

// 根据分数设置柱子随机宽度
export function getRadiusByScore(value) {
  if (value > 10000) return getRangeRandom(vw(0.015), vw(0.06))
  if (value > 6000) return getRangeRandom(vw(0.02), vw(0.07))
  if (value > 4000) return getRangeRandom(vw(0.03), vw(0.08))
  if (value > 2000) return getRangeRandom(vw(0.035), vw(0.09))
  if (value > 1000) return getRangeRandom(vw(0.04), vw(0.1))
  if (value > 500) return getRangeRandom(vw(0.05), vw(0.13))
  else return getRangeRandom(vw(0.06), vw(0.14))
}
// 设置柱子之间随机间隔
export function getMarginRightByScore() {
  return getRangeRandom(vw(0.1), vw(0.4))
}

export function randomCreatePillars(n) {
  return [...Array(n)].map(() => ({
    radius: getRadiusByScore(0),
    marginRight: getMarginRightByScore(0),
  }))
}

export const getCountdown = (endTime) => {
  const diff = endTime.diff(dayjs()) // 时间差
  const diffHours = dayjs.duration(diff).hours()
  const diffMinutes = dayjs.duration(diff).minutes()
  const diffSeconds = dayjs.duration(diff).seconds()
  // 格式化为需要的格式 这里是时分秒
  let hoursStr = ''
  let minutesStr = ''
  let secondsStr = ''
  if (diffHours !== 0) {
    hoursStr = diffHours < 10 ? `0${diffHours}` : diffHours
    hoursStr = `${hoursStr}:`
  }
  if (diffMinutes !== 0) {
    minutesStr = diffMinutes < 10 ? `0${diffMinutes}` : diffMinutes
    minutesStr = `${minutesStr}:`
  }
  secondsStr = diffSeconds < 10 ? `0${diffSeconds}` : diffSeconds
  if (!diffHours && !diffMinutes && diffSeconds <= 0) return ''
  if (diffHours < 0 || diffMinutes < 0 || diffSeconds < 0) return ''
  return `${hoursStr}${minutesStr}${secondsStr}`
}

// 对服务端给的错误消息，二次处理
export function handleMsg(str) {
  if (str.includes('注册成功')) return '注册成功，3秒后将自动跳转到登录页'
  if (str.includes('已登录'))
    return '已存在已登录账号，3秒后将自动为你跳转到首页'
  if (str.includes('创建成功'))
    return '商品创建成功，3秒后将自动为你跳转商品详情页'
  return str
}

export function copyTxt(str) {
  navigator.clipboard.writeText(str)
  Toast.show({ content: '已复制' })
}

export function hideStr(str, startLen, endLen) {
  if (!str || !str.length) return ''
  if (str.length < startLen + endLen) return str
  return (
    str.substring(0, startLen) + '****' + str.substring(str.length - endLen)
  )
}

export const getRangeRandom = (min, max) => {
  const decimalOfMin = `${min}`.split('').reverse().join('').indexOf('.')
  const decimalOfMax = `${max}`.split('').reverse().join('').indexOf('.')
  const mul = Math.max(decimalOfMin, decimalOfMax) + 1
  min = min * 10 ** mul
  max = max * 10 ** mul
  const random = Math.floor(Math.random() * (min - max) + max)
  return random / 10 ** mul
}
