
var myMaxScore = 0;

function dobbelsteenGooien(){

    aa = document.getElementById("gooi");

    d1 = document.getElementById("1");
    d2 = document.getElementById("2");
    d3 = document.getElementById("3");
    d4 = document.getElementById("4");
    d5 = document.getElementById("5");


    myArray = [0,0,0,0,0,0,0];
    imgArray = [d1,d2,d3,d4,d5];


    for(let i = 0; i<5; i++ ){
        var a = Math.floor(Math.random() * 6) + 1;
       switch(a){
        case 1 : myArray[0] ++; imgArray[i].src=".\\Resources\\dobbel1.gif";
        break;
        case 2 : myArray[1] ++; imgArray[i].src=".\\Resources\\dobbel2.gif";
        break;
        case 3 : myArray[2] ++; imgArray[i].src=".\\Resources\\dobbel3.gif";
        break;
        case 4 : myArray[3] ++; imgArray[i].src=".\\Resources\\dobbel4.gif";
        break;
        case 5 : myArray[4] ++; imgArray[i].src=".\\Resources\\dobbel5.gif";
        break;
        case 6 : myArray[5] ++; imgArray[i].src=".\\Resources\\dobbel6.gif";
    }
}

    if(Math.max(...myArray) > myMaxScore){
        myMaxScore = Math.max(...myArray);
    }

    aa.innerText = "Aantal gelijke nummers : " + '\n'


    + '\nOne: ' + myArray[0] + '\n'
    + '\nTwee: ' + myArray[1] + '\n'
    + '\nDrie: ' + myArray[2] + '\n'
    + '\nVier: ' + myArray[3] + '\n'
    + '\nVijf: ' + myArray[4] + '\n'
    + '\nZes: ' + myArray[5] + '\n'

    + '\nMax Value:' + myMaxScore;

}


function reset(){
    aa = document.getElementById("gooi");

    myMaxScore = 0


    for (let i = 0; i < imgArray.length; i++) {
        imgArray[i].src=".\\Resources\\dobbel6.gif"
      }


    aa.innerText = 'Gooi';
    
}

