import { vw, vh } from '../../tool'

export const PILLAR = {
  h: vh(0.3),
  moveDuration: 0.5, // 柱子移动时间
}

export const HUMAN = {
  x: vw(0.1),
  y: vh(0.7) - vw(0.04),
  w: vw(0.02),
  h: vw(0.04),
}

export const STICK = {
  x: HUMAN.x + HUMAN.w + vw(0.01),
  y: vh() - PILLAR.h + vw(0.04) / 2,
  w: vw(0.02),
  h: -vw(0.04),
  downDuration: 0.5, // 杆子倒下时间
  stretchSpeed: 0.4, // 杆子增长速度
}
