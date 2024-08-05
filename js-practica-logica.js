//User profile

//Highest number


//Alarm
/*let seconds= prompt("Introduce la cantidad de segundos para programar la alarma:");
function getUser(){
    console.log('¡Time to go to bed!');
}

setTimeout(getUser, seconds * 1000);
console.log(`Time for bed after ${seconds} seconds`);*/
//-------------------

//Palindrome
/*let text = prompt("Introduce una palabra o frase");
let sentence = text.toLowerCase();
function palindrome() {
    const invertedText = sentence.split("").reverse().join("");
    if (sentence === invertedText) {
      console.log("Es palindromo");
    } else {
      console.log("No es palindromo");"
    };
  
  };
  
palindrome();*/
//-------------------

//Factorial
function factorialRecursivo (n) {
    if (n == 0){
      return 1;
    }
    return n * factorialRecursivo (n-1);
  }
console.log(factorialRecursivo(7));
//-------------------

//Flat array
//let multiDimension = [1, [2, 3, [4, 5, [6]]]];
function flatArray(array, callback){
    let newArray;
    newArray = array.flat(Infinity);

    callback(newArray);
}


function displayArray (value){
    console.log(value);
}

flatArray([1, [2, 3, [4, 5, [6]]]], displayArray);
