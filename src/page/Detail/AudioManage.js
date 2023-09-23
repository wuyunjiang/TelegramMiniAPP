const AudioManage = class {
  constructor() {
    this.bgMusic = new Audio('/bgmusic.mp3')
    // 循环播放
    this.bgMusic.addEventListener('ended', this.bgMusic.play, false)
    this.bgMusic.volume = 0.2
    this.perfect = new Audio('/perfect.mp3')
    this.gameOver = new Audio('/gameover.mp3')
  }

  playBgMusic = () => {
    this.bgMusic.play()
  }
  playGameOver = () => {
    this.gameOver.play()
  }
  playPerfect = () => {
    this.perfect.play()
  }

  stopAllMusic = () => {
    this.bgMusic.pause()
    this.bgMusic.currentTime = 0
    this.perfect.pause()
    this.perfect.currentTime = 0
    this.gameOver.pause()
    this.gameOver.currentTime = 0
  }
}
export default AudioManage
