/* stack -괄호 맞추기*/
const list = ['(', '(', ')']
let stack = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] == '(') {
        stack.push('(');
    } else if (list[i] == ')') {
        stack.pop();
    } else {
        console.log('ERROR!!')
    }
}

if (stack.length > 0) {
    console.log('False!!')
} else {
    console.log('True!!')
}