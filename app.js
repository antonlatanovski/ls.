   let arr = [];
  arr.length=10;
   for( let i =0; i<arr.length;i++){
    arr[i]=Math.floor(Math.random()*100);
      if(arr[i]>6 && arr[i]<15){ 
      
      } 
      alert(arr)  
  } 

 let arr = [];
 arr.length=10;
 for( let i =0; i<arr.length;i++){
  arr[i]=Math.floor(Math.random()*100);}
  alert(arr)
    let newArr = arr.map((item) =>{
     return 
    }); alert(newArr)


    // for( let i =0; i<arr.length;i++){
//     arr[i]=Math.floor(Math.random()*100);
//     if(arr[i]%7==0){ 

//     } 
    
// } alert(arr)


// задание 2
// const arr = ['понедельник','вторник','среда','четверг','пятница','суббота', 'воскресенье'];
// for( let i =0;i<arr.length;i++){
//     // if(arr[i]==='суббота'||'воскресенье'){
//     //     alert(arr[i]=i.born)
//     // }
//     alert(arr[i])

// ЗAДАНИЕ 5
// let arr =[];
// arr.length=10;
//  for (i=0;i<arr.length;i++) {
//    arr[i]=[Math.floor(Math.random()*100)]; 
//  }alert(arr)
//  let newArr = arr.filter((item)=>{
//     return item%5==0;
//  }); alert(newArr)

//  ЗАДАНИЕ 6

// let arr =[];
//   arr.length=10;
//    for (i=0;i<arr.length;i++) {
//      arr[i]=[Math.floor(Math.random()*100)]; 
//    }alert(arr)
//    let newArr = arr.sort((a,b)=>{
//       if(a<b) return -1;
//       if(a===b) return 0;
//       if(a>b) return 1;
//    }); alert(newArr)


//  ЗАДАНИЕ 7
//    let arr =[];
//   arr.length=10;
//    for (i=0;i<arr.length;i++) {
//      arr[i]=[Math.floor(Math.random()*100)]; 
//    }alert(arr)
//    let newArr = arr.reduce((acc, item) => (acc +item)); 
//    alert(newArr)