//todo: need to add M+, M- functionality

let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{


        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string        // takes the value of input tag and converts it to string
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string        // takes the value of input tag and converts it to string
        }
       
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;                //this changes the string
            document.querySelector('input').value = string        // takes the value of input tag and converts it to string
        }

    })
})