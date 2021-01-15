import './style'
import drawFireworks from '@/js/drawFireworks'
import start from '@/js/start'
document.addEventListener('mousedown', e => {
    let x = e.clientX;
    let y = e.clientY;
    drawFireworks({x,y});
});
start()
