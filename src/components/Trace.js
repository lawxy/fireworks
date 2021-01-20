import {drawFireworks} from '../js/drawFireworks';
import { random } from '@/utils';
export default class Trace {
    constructor(x, bombY) {
        this.x = x || random(0, window.innerWidth);
        this.y = window.innerHeight;
        this.r = random(10, 15);
        this.speed = random(3, 5);
        this.dead = false;
        this.bombY = bombY || random(0, window.innerHeight / 3 )
        this.hue = Math.floor(random(1,254))
        this.draw()
    }
    bomb(x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        // console.log('bomb', x, y)

        drawFireworks({x, y, hue: this.hue})
    }
    update() {
        if(this.speed < 3 || Math.abs(this.y - this.bombY) < 10) {
            this.bomb(this.x, this.y)
            this.dead = true;
        } else {
            this.speed -= 0.0;
            this.y -= this.speed;
            this.draw()
        }
    }
    draw() {
        // console.log(this.x, this.y)
        let ctx = canvas.getContext('2d')
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        var rad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        // rad.addColorStop(0, 'rgba(255,255,255,0.8)');
        // rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
        // rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
        // rad.addColorStop(1, 'rgba(255,255,255,0)');

        rad.addColorStop(0, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.1, `hsla(${this.hue}, 100%, 50%,0.8)`);
        rad.addColorStop(0.2, `hsla(${this.hue}, 100%, 50%,0.08)`);
        rad.addColorStop(1, 'rgba(255,255,255,0)');

        // rad.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
        // rad.addColorStop(0.8, "hsla(" + this.hue + ", 100%, 50%, " + this.alpha + ")");
        // rad.addColorStop(1, "hsla(" + this.hue + ", 100%, 50%, 0.1)");

        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}