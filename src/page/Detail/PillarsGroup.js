import Konva from 'konva'
import { vh } from '../../tool'
import { PILLAR, STICK } from './constant'

const PillarsGroup = class {
  constructor(pillars = []) {
    const group = new Konva.Group()
    this.group = group
    this.node = this.update(pillars)
  }

  update(pillars) {
    this.pillars = pillars
    let nowX = STICK.x + STICK.w - pillars[0]?.radius * 2
    this.group.setAttr('x', 0)
    this.group.destroyChildren()
    for (let i = 0; i < pillars.length; i++) {
      const item = pillars[i]
      const pillar = new Konva.Rect({
        x: nowX,
        y: vh() - PILLAR.h,
        width: item.radius * 2,
        height: PILLAR.h,
        fill: '#2E2E30',
      })
      if (i === 1) {
        const center = new Konva.Rect({
          x: nowX + item.radius - 1,
          y: vh() - PILLAR.h - 2,
          width: 2,
          height: 4,
          fill: 'red',
        })
        this.group.add(center)
      }
      nowX = nowX + item.radius * 2 + item.marginRight
      this.group.add(pillar)
    }
    return this.group
  }

  moveNextPillar(moveEndCbk) {
    this.node.to({
      x: -(this.pillars[0].marginRight + this.pillars[1].radius * 2),
      duration: PILLAR.moveDuration,
      onFinish: () => {
        setTimeout(moveEndCbk && moveEndCbk(), PILLAR.moveDuration * 1000)
      },
    })
  }

  add(node) {
    this.group.add(node)
  }
}
export default PillarsGroup
