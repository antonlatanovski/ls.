let but = 0;
let up = 100;
let found = false;
let N = alert('загадайте число от 0 до 100')
while(but<=up &!found){
    N = Math.floor((up+but)/2);
    let answer = prompt(`Ваше число больше, меньше или равно ${N}? Введите "больше", "меньше" или "равно".`);
    if(answer === "равно"){ 
    found = true;
    }else if( answer==="больше"){ 
   but = N + 1;
 }else {
    up = N-1;
 }
}
alert(` ваше число ${N}!`);
    
