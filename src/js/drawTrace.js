import Trace from '@/components/Trace';
import { random } from '@/utils';

let traces = [];
function addTrace(x) {
    let trace = new Trace(x);
    traces.push(trace)
}
export default function drawTrace() {
    traces = traces.filter(t => !t.dead)
    traces.forEach(trace => {
        trace.update()
    })
}
setInterval(addTrace, 5000)