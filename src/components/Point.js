let context = canvas.getContext('2d');
import { random } from '@/utils'
export default class Point {
    constructor(x, y, hue) {
        this.x = x; 
        this.y = y;
        // this.angle = angle; // 对于鼠标点击中心的角度
        this.angle =  Math.random() * Math.PI * 2;; // 对于鼠标点击中心的角度
        // this.radius = Math.floor(Math.random()*3)+1; // 粒子的半径
        this.radius = random(8,15); // 粒子的半径
        // this.radius = random(2,3); // 粒子的半径
        this.dead = false;
        this.hue = hue
        // this.speed = (Math.random()*5)+.4; // 速度
        // this.speed = (Math.random()*20)+.4; // 速度
        this.speed = Math.cos(Math.random() * Math.PI / 2) * 15;
        // this.speed = random(1, 10)
        this.resistance = 0.92 // 摩擦力
        this.alpha = 1; // 透明度
        this.decay = random(0.005, 0.008); //碎屑存在时间
        this.gravity = 1; // 重力
        this.update()
    }
    update() {
       
        this.speed *= this.resistance; // 速度减缓
        let patchx = Math.cos(this.angle) * this.speed
        let patchy = Math.sin(this.angle) * this.speed
        this.x += patchx; 
        this.y += patchy + this.gravity // 纵坐标重力因素
        this.radius *= random(0.93, 0.98) // 粒子变小
        this.alpha -= this.decay; // 透明度减小
        // this.dead = this.alpha < this.decay
        // 粒子存在条件
        if(this.alpha < 0.1 && this.radius < 1) this.dead = true;
        else this.draw()
    }
    draw() {
        context.save();
        context.globalCompositeOperation = 'lighter';
        context.beginPath();
        // context.arc(vx, vy, this.radius, 0 , Math.PI * 2, false);
        context.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
        context.closePath();
        // context.fillStyle = '#ff0000';
        // context.fillStyle = 'hsla('+this.hue+', 100%, '+this.brightness+'%, '+this.alpha+')';
        // context.globalCompositeOperation = 'lighter';
        // context.globalCompositeOperation = 'lighter';
        var gradient = context.createRadialGradient(this.x, this.y, 0.1, this.x, this.y, this.radius/2);
        gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
        gradient.addColorStop(0.8, "hsla(" + this.hue + ", 100%, 50%, " + this.alpha + ")");
        gradient.addColorStop(1, "hsla(" + this.hue + ", 100%, 50%, 0.1)");
        context.fillStyle = gradient;

        context.fill();
        context.restore();
    }
}