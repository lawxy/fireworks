import { random } from '@/utils';
export default class Meteor {
    constructor() {
        this.x = random(0, window.innerWidth)
        this.y = 0
        this.r = random(5, 8);
        // this.angle = random(0, 1) * Math.PI;
        let angle = Math.atan(window.innerHeight  / window.innerWidth)
        this.angle = random(0, 1) > 0.5 ? random(0, angle) : random(Math.PI - angle, Math.PI)
        this.speed = random(5, 8);
        this.dead = false;
        this.draw()
    }
    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        if(Math.abs(this.x) > window.innerWidth) this.dead = true
        else this.draw()
        
    }
    draw() {
        let ctx = canvas.getContext('2d')
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        var rad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
        rad.addColorStop(0, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.1, 'rgba(255,255,255,0.8)');
        rad.addColorStop(0.2, 'rgba(255,255,255,0.08)');
        rad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }
}