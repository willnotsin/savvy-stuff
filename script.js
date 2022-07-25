const myInput = document.getElementById("password");
const upper = document.getElementById("uppercase");
const number = document.getElementById("number");
const special = document.getElementById("special");
const length = document.getElementById("length");

console.log(myInput.value);

myInput.onkeyup = function(){
    const upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)){
        upper.classList.remove('invalid')
        upper.classList.add('validation');
    }else{
        upper.classList.remove('validation')
        upper.classList.add('invalid')
    }

    const numberCharacter = /[0-9]/g;
    if (myInput.value.match(numberCharacter)){
        number.classList.remove('invalid')
        number.classList.add('validation');
    }else{
        number.classList.remove('validation')
        number.classList.add('invalid')
    }

    const specialCharacter = /[$ _ - * @ ( ! ^ &]/g;
    if (myInput.value.match(specialCharacter)){
        special.classList.remove('invalid')
        special.classList.add('validation');
    }else{
        special.classList.remove('validation')
        special.classList.add('invalid')
    }

    if(myInput.value.length >= 8){
        length.classList.remove('invalid')
        length.classList.add('validation');
    }else{
        length.classList.remove('validation')
        length.classList.add('invalid')
    }
}

