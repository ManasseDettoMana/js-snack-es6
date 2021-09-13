const myArray = ['vincenzo', 'mario', 'roberto','camilla','samuele', 'marco', 'mattia', 'luca'];

const minUtente = parseInt(prompt("inserisci un numero che va da zero a "+ myArray.length - 1));
const maxUtente = parseInt(prompt("inserisci un numero che va da " + minUtente + " a " + myArray.length - 1));


while(minUtente < 0 || minUtente >= myArray.length || isNaN(minUtente)){
    minUtente = parseInt(prompt("inserisci un numero che va da zero a "+ myArray.length - 1));
}

while(maxUtente<minUtente || maxUtente>=myArray.length || isNaN(maxUtente)){
    maxUtente = parseInt(prompt("inserisci un numero che va da " + minUtente + " a " + myArray.length - 1));

}



function arrayDriver(array,firstIndex,lastIndex){
    
    return array.filter((element,index) => index >= firstIndex && index <= lastIndex);
}


// function arrayDividerForEach(array, firstIndex, lastIndex){
//     const newArray = [];

//     array.forEach((element, index) => {
//         if(index>=firstIndex  && index<=lastIndex{
//             newArray.push(element);
//         }
//     });
// }

console.log(newArray);