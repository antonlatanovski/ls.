let but = 0;
let up = 100;
let found = Number(prompt('введте число от 0 до 100'));
let N ; 
while(but<=up & found!=N){
    N = Math.floor((up+but)/2);
    let answer = prompt(`Ваше число больше, меньше или равно ${N}? Введите "больше", "меньше" или "равно".`);
    if(answer === "равно"){ 
    found = N;
    }else if( answer==="больше"){ 
   but = N + 1;
 }else {
    up = N-1;
 }
}
alert(` ваше число ${N}!`);
    
