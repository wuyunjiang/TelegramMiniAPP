import Konva from 'konva'
import { STICK } from './constant'
import { sleep } from '../../tool'

class Stick {
  constructor(
    x = STICK.x,
    y = STICK.y,
    width = STICK.w,
    height = STICK.h,
    fill = '#2E2E30'
  ) {
    this.stretching = false
    this.node = new Konva.Rect({
      x: x,
      y: y,
      width: width,
      height: height,
      fill: fill,
    })
  }

  reset = (pillarsGroup) => {
    this.node = new Konva.Rect({
      x: STICK.x,
      y: STICK.y,
      width: STICK.w,
      height: STICK.h,
      fill: '#2E2E30',
    })
    pillarsGroup.add(this.node)
  }

  clockwiseDown = (finishCbk) => {
    const long = Math.abs(this.node.attrs.height)
    this.node.to({
      rotation: 90,
      duration: STICK.downDuration,
      easing: Konva.Easings.EaseIn,
      onFinish: () => {
        setTimeout(finishCbk && finishCbk(long), STICK.downDuration * 1000)
      },
      offsetY: this.node.attrs.width,
      offsetX: this.node.attrs.width,
    })
  }

  stretch = async () => {
    this.stretching = true
    do {
      this.node.setAttr('height', this.node.attrs.height - STICK.stretchSpeed)
      await sleep(1)
    } while (this.stretching)
  }

  stopStretch = (stopCbk) => {
    this.stretching = false
    stopCbk && stopCbk()
  }
}
export default Stick
