import obj from './second'
type testType = string | number;
let test: testType = 'sample';

let element = document.createElement('div');
element.innerText = obj.a;
document.body.appendChild(element);

/*interface Interface {
    phrase: string,
    delay: number
}

function say(opt: Interface): void
function say(phrase: string): void
function say(phrase: string | Interface): void {
    if (typeof phrase === 'string') {
        alert(test);
    }
}


function generic<P>(arg: P) : P {

    return arg;
}

generic('text')

say('hello');
say({phrase: 'hello', delay: 500});
export default test;*/
