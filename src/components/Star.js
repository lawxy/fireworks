import { random } from '@/utils';
export default class Star {
    constructor() {
        this.x = random(0, window.innerWidth)
        this.y = random(0, window.innerHeight/2)
        this.r = random(3, 5);
        this.init()
        this.draw()
    }
    init() {
        window.addEventListener('resize', () => {
            this.x = random(0, window.innerWidth)
            this.y = random(0, window.innerHeight/2)
        });
    }
    update() {
        let r = this.r
        r += Math.random() * 2 - 1;
        r = Math.max(0, r);
        r = Math.min(3, r);
        this.r = r;
        this.draw()
    }
    draw() {
        let ctx = canvas.getContext('2d')
        ctx.save();
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