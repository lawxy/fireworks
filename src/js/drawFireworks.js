import clearCanvas from '@/js/clearCanvas'
import Firework from '@/components/Firework';
let fireworks = []; //烟花个数
/**
 * 画出每一个粒子
 * @param {*} options 
 * count 烟花粒子数量
 * radius 烟花环绕半径
 * sx, sy 烟花环绕圆心
 * r每个烟花粒子的半径
 */
function _drawFireworks ({x, y}) {
    let firework = new Firework(x, y);
    firework.createPoint()
    fireworks.push(firework)
}

export default function drawFireworks({x, y}) {
    _drawFireworks({x, y});
}
// export function tick() {
//     clearCanvas();//清除画布
//     //清除绽放完的烟花
//     fireworks = fireworks.filter(firework => firework.points.length > 0)
//     // console.log(fireworks)
//     fireworks.forEach((firework) => {
//         firework.update()
//     })
//     requestAnimationFrame(tick);
// }
export function fireworksJob() {
    //清除绽放完的烟花
    fireworks = fireworks.filter(firework => firework.points.length > 0)
    // console.log(fireworks)
    fireworks.forEach((firework) => {
        firework.update()
    })
}
