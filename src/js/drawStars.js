import Star from '@/components/Star'
const stars = []
function drawStars() {
    for(let i = 0 ; i < 200; i++) {
        let star = new Star();
        stars.push(star)
    }
}
drawStars()
export default function drawStarsJob() {
    stars.forEach((star) => {
        star.update()
    })
}