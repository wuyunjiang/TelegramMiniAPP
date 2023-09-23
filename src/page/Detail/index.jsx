import { useState, useRef, useEffect } from "react";
import { Dialog } from "antd-mobile";
import qs from "qs"
import { Context } from "../../context";
import "../../style/Detail.css";
import { useNavigate } from "react-router-dom";
import { getRadiusByScore, getMarginRightByScore, randomCreatePillars, vw, vh } from '../../tool'
import Konva from 'konva';
import Human from "./Human";
import Stick from "./Stick";
import PillarsGroup from "./PillarsGroup";
import exitIcon from "../../assets/exit.svg";
import AudioManage from "./AudioManage";

// data
let pillars = randomCreatePillars(3)

// Component
let layer, human, stick, pillarsGroup, total = 0, audioManage

function Detail() {
  const navigate = useNavigate();

  const [score, setScore] = useState(0)

  useEffect(() => {
    init()
    return () => {
      audioManage.stopAllMusic()
      audioManage = null
    }
  }, [])

  // 初始化场景
  const init = () => {
    if (!audioManage) {
      audioManage = new AudioManage()
      audioManage.playBgMusic()
    }
    const stage = new Konva.Stage({
      container: 'container',
      width: vw(),
      height: vh(),
    });
    stage.container().style.backgroundColor = '#F7F7F7';
    layer = new Konva.Layer();
    layer.setAttr

    human = new Human();
    stick = new Stick();
    pillarsGroup = new PillarsGroup(pillars);

    pillarsGroup.add(stick.node)
    layer.add(human.node)
    layer.add(pillarsGroup.node)
    stage.add(layer);

    stage.on("touchstart", () => {
      stick.stretch()
    })
    stage.on("touchend", () => {
      stick.stopStretch(handleRes)
    })
  }

  function handleRes() {
    stick.clockwiseDown(handleFinish)
  }

  function handleFinish(long) {
    const success = long >= pillars[0].marginRight && long <= (pillars[0].marginRight + pillars[1].radius * 2)
    if (success) {
      // 成功
      const best = pillars[0].marginRight + pillars[1].radius
      const current = best - Math.abs(best - long)
      if (Math.abs(best - current) < 8) {
        audioManage.playPerfect()
      }
      total += current
      setScore(Math.floor(total))
      pillarsGroup.moveNextPillar(moveFinish)
    } else {
      // 失败
      audioManage.playGameOver()
      Dialog.alert({
        content: '游戏结束！',
        confirmText: "再玩一局",
        onConfirm: async () => {
          restart()
        },
      })
    }
  }

  function restart() {
    total = 0
    layer = null
    human = null
    stick = null
    pillarsGroup = null
    total = 0
    setScore(total)
    pillars = randomCreatePillars(3)
    init()
  }

  // 平移完成
  function moveFinish() {
    pillars = [...pillars.slice(1), {
      radius: getRadiusByScore(total),
      marginRight: getMarginRightByScore()
    }]
    pillarsGroup.update(pillars)
    stick.reset(pillarsGroup)
  }

  const handleExit = () => {
    Dialog.confirm({
      content: '是否退出本局游戏？',
      onConfirm: async () => {
        navigate("/")
      },
    })
  }

  return (
    <div className="page detail_page">
      <div id="container"></div>
      <div className="score">
        <div>最好记录: {score}</div>
        <div>当前分数: {score}</div>
        <div>今日排名: {score}</div>
      </div>
      <div className="close" onClick={handleExit}>
        <img className="exit" src={exitIcon} />
      </div>
    </div>
  );
}

export default Detail;
