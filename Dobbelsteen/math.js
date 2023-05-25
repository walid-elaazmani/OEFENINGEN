
var myMaxScore = 0;


function dobbelsteenGooien(){

    var aa = document.getElementById("gooi");

    var myArray = [0,0,0,0,0,0,0];


    for(let i = 0; i<5; i++ ){
        var a = Math.floor(Math.random() * 6) + 1;
       switch(a){
        case 1 : myArray[0] ++;
        break;
        case 2 : myArray[1] ++;
        break;
        case 3 : myArray[2] ++;
        break;
        case 4 : myArray[3] ++;
        break;
        case 5 : myArray[4] ++;
        break;
        case 6 : myArray[5] ++;
       }
    }



    if(Math.max(...myArray) > myMaxScore){
        myMaxScore = Math.max(...myArray);
    }

    aa.innerText = "Aantal gelijke nummers : " 


    + '\nOne: ' + myArray[0]
    + '\nTwee: ' + myArray[1]
    + '\nDrie: ' + myArray[2]
    + '\nVier: ' + myArray[3] 
    + '\nVijf: ' + myArray[4]
    + '\nZes: ' + myArray[5]

    + '\nMax Value:' + myMaxScore;

}


function reset(){
    var aa = document.getElementById("gooi");

    myMaxScore = 0


    aa.innerText = 'Gooi';

    
}

