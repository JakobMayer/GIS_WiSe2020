"use strict";
//  -------- Aufgabe 1a) ---------
min(4, 6, 7, 3, 8, 2, 9);
function min(...array) {
    let smallestValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallestValue) {
            smallestValue = array[i];
        }
    }
    console.log(smallestValue);
}
/*  ------   Aufgabe 1b) -------
isEven(-8);
function isEven(irgendeineZahl:number){
    if(irgendeineZahl==0){
        console.log("true");
    } else if(irgendeineZahl<0){
        var pos=irgendeineZahl*-1;
        isEven(pos);
    } else if(irgendeineZahl==1){
        console.log("false");
    } else if(irgendeineZahl>1){
        isEven(irgendeineZahl-2);
    }
}
*/
/*  -------- Aufgabe 1c) -----------
interface Studierender {
    name: string;
    alter: number;
    fach: string;
    semester: number;
}

let studi1:Studierender={name:"Max", alter:20, fach:"Informatik", semester:3};
let studi2:Studierender={name:"Adam", alter:24, fach:"BWL", semester:1};
let studi3:Studierender={name:"Hanna", alter:19, fach:"Germanistik", semester:6};

let studierendenArray: Studierender [] = [studi1, studi2, studi3];                   //4. Studierender?

function showInfo(student:Studierender){
    console.log("Name: " + student.name + ", Alter: " + student.alter + ", Fach: " + student.fach + ", Semester: " + student.semester)
}
showInfo(studi3);
*/
/* --------- Aufgabe 2a) ----------
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);


function backwards(array1:number []){
    let count:number=0;
    let array2:number []=[];
    for(var i=array1.length-1; i>=0; i--){
        array2[count]=array1[i];
        count++;
    }
    return array2;
}
*/
/* --------- Aufgabe 2b) ----------
let array1:number [] = [1,2,3,4,5];
let array2:number [] = [6,7,8,9];

function join(){
    for(var i=0; i<array2.length; i++){
        array1.push(array2[i]);
    }
    console.log(array1);
}
join();
*/
/* --------- Aufgabe 2c) ----------
let array1:number [] = [1,2,3,4,5,6,7,8,9]

function split(a:number, b:number){
    let array2:number []=array1.slice(a,b);
    console.log(array2)
}

split(1,4);
*/
/* ------------  Aufgabe 3 ----------
let canvas: HtmlCanvasElement = <HtmlCanvasElement> document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 10;

context.strokeRect(75, 140, 150, 110);

context.fillRect(130, 190, 40, 60);

context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();
*/ 
//# sourceMappingURL=script.js.map