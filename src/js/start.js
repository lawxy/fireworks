import { fireworksJob } from './drawFireworks';
import resize from './resize'
function tick() {
    fireworksJob() // 烟花
    requestAnimationFrame(tick)
}
export default function start() {
    resize()
    tick()
}