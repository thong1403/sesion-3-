// //ex 1
// for (let i = 0; i <= 99; i = i + 1){
//     console.log(i.length - 1, "đã hoàn thành ");
// }

//ex 2
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series:');
// for (let i = 1 ; i<= 20 ; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
//ex 3 
// let n1 = 0 , n2 = 1 ,nextTerm;
// console.log('Fibonnacci Series:');
// for (let i = 1 ; i <=3; i = i + 1){
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }console.log(n1 + n2 )%5;
// let n1 = 0 , n2 = 1 , nextTerm;
// console.log ('Fibonnacci Series:');
// for (let i = 1 ; i<= 20; i = i+ 1 ){
//     nextTerm = n1 + n2;
//     n1 = n2 
//     n2 = nextTerm;

// }console.log(n1 +n2 + nextTerm);
//ex 6

    for ( i = 0
         ; i <= 100 ; i = i+ 1){
        if(  i % 3 === 0){
        console.log(`${i}- Fizz`);
    }else if( i %5 ===0) {
        console.log(`${i}-Buzz`);
    }else if(i %3 ===0 && i % 5 ===0) {

        console.log(`${i}- FizzBuzz`);
    }

    
}
    //ex 7
