// Code your solutions in this fil
function writeCards(names, event) {
    let emptyArray = [];
    for (let i=0; i < names.length; i++){
        emptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return emptyArray;
}

writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function countDown(input) {
    let i = 0
    while (input >= 0){
        console.log(input--)
    }
}

countDown(10)