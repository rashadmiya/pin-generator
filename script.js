
const generatePin = document.querySelector('#generate-pin');
const pinArea = document.querySelector('#pin-area');
let count = 0

const notMatchNote = document.getElementById('notMatchNote');
const matchNote = document.getElementById('matchNote');
notMatchNote.style.display = 'none';
// matchNote.style.visibility = 'hidden'
matchNote.style.display = 'none'


function pinGenerate (){
const array = [0,1,2,3,4,5,6,7,8,9]
let randomFa ='';
for( let i = 0; i<4; i++){
    let random = Math.round(Math.random()*4);
    randomFa += array[random];
    
}
pinArea.value = randomFa;
}

generatePin.addEventListener('click',pinGenerate)

function calculate (event){

    let clickButton = event.target.value;

    if (matchDisplay.value !== '' && matchDisplay.value.length >3){
    //    let keepPin = pinGenerate();
       
    } else {

        matchDisplay.value += clickButton;
    }

}

const matchDisplay = document.getElementById('matchDisplay');
const buttons = document.querySelectorAll('.button');
for(let i = 0; i <buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click',calculate);
}

const submit = document.querySelector('.submit-btn');
submit.addEventListener('click',() => {

    count++;
    let leftTry = 3-count;
    document.querySelector('#left-try').innerHTML = leftTry;

   if (count < 4){
    if(pinArea.value !='' && matchDisplay.value !=''){
        if(pinArea.value == matchDisplay.value){
            notMatchNote.style.display = 'none'
        //    matchNote.style.visibility = 'visible';
            matchNote.style.display = 'block'
            pinArea.value = '';
            matchDisplay.value = '';

            mainFun();

         

        }else {
            notMatchNote.style.display = 'block'
            // matchNote.style.visibility = 'hidden';
            matchNote.style.display = 'none'

            
        }
    }else{
        console.log('input is empty');
    }
   } else{
       if (leftTry < 1){
           submit.disabled = true;
       }
   }
})
