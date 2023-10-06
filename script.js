// console.log("hello ");
// let object = document.querySelectorAll(".button");
// let input = document.querySelector(".input");
 

// for (const iterator of object) {
//     console.log(iterator.value)
    
//     document.addEventListener("keypress" , (e) =>{
//     //    console.log(e.key)
//         if(e.key <= 10){
//            input.innerHTML += e.key; 
//         }
//     })
// }
 

let string = "";
let buttons = document.querySelectorAll(".button");
// document.addEventListener('keypress' , (e) => {
//     var key = e.key
// })
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=' ){
            string = eval(string);
            document.querySelector('.input').value = string;
        }
       else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('.input').value = string;
        }
        else{
            // console.log(e.target);
        string = string + e.target.innerHTML;
        // console.log(string);
        document.querySelector('.input').value = string;
        }
        
    })
})
// Array.from(buttons).forEach((button)=>{
//     .addEventListener('keypress' , (e) =>{
//         if(e.key == 'Enter'){
//             string = eval(string);
//             document.querySelector('.input').value = string;
//         }
//        else if(e.key == 'Erase'){
//             string = "";
//             document.querySelector('.input').value = string;
//         }
//         else{
//             console.log(e.key);
//         string = string + e.key;
//         console.log(string);
//         document.querySelector('.input').value = string;
//         }
//         console.log(e.key)
//     })
// })