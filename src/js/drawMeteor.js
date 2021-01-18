import Meteor from '@/components/Meteor'
let meteors = []
function addMeteor() {
    let meteor = new Meteor();
    meteors.push(meteor)
}
export default function drawMeteorsJob() {
    if(Math.random() > 0.99) {
        // console.log(1)
        addMeteor()
    }
    meteors = meteors.filter(m => !m.dead)
    meteors.forEach((meteor) => {
        meteor.update()
    })
}