import  fireworksJob from './drawFireworks';
import drawStarsJob from './drawStars'
import drawMeteorsJob from './drawMeteor'
import drawTrace from './drawTrace'
import clearCanvas from './clearCanvas'
import resize from './resize'
function tick() {
    clearCanvas();//清除画布
    fireworksJob() // 烟花
    drawStarsJob() // 星星
    drawMeteorsJob() //流星
    drawTrace() //发射器
    requestAnimationFrame(tick)
}
export default function start() {
    resize()
    tick()
}