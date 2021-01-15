import Point from '@/components/Point'
import { random } from '@/utils'

export default class Firework {
    constructor(x, y) {//鼠标点击位置，烟花中心
        this.x = x;
        this.y = y;
        this.points = [];//烟花粒子
    }
    // 创建烟花粒子
    createPoint() {
        let count = random(60, 100);
        let hue = Math.floor(random(1,254))
        for(let i = 0 ; i < count ; i++) {
            // let angle = 360 / count * i; //烟花粒子角度
            // angle = angle * Math.PI / 180;
            let point = new Point(this.x, this.y, hue)
            this.points.push(point)
        }
    }
    update() {
        this.points = this.points.filter(point => !point.dead)
        this.points.forEach(point => {
            point.update()
        })
    }
}