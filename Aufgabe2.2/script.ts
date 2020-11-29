/*  -------- Aufgabe 1a) ---------
console.log(min(4, 6, 7, 3, 8, 2, 9));
function min(...array: number[]): number {
    let smallestValue: number = array[0];
    for (let i: number = 1; i < array.length; i++) {
        if (array[i] < smallestValue) {
            smallestValue = array[i];
        }
    }
    return smallestValue;
}
*/




/*  ------   Aufgabe 1b) -------
isEven(-9);
function isEven(irgendeineZahl:number) {
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

let studierendenArray: Studierender [] = [studi1, studi2, studi3];                 
studierendenArray.push({name:"Marie", alter:30, fach:"Medizin", semester:7});
console.log(studierendenArray);

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

function join(arrayA:number[], arrayB:number[]){
    for(var i=0; i<array2.length; i++){
        arrayA.push(arrayB[i]);
    }
    console.log(arrayA);
}
join(array1, array2);
*/



/* --------- Aufgabe 2c) ----------
let array1:number [] = [1,2,3,4,5,6,7,8,9]

function split(a:number, b:number){
    let array2:number []=array1.slice(a,b);
    console.log(array2)
}

split(1,4);
*/



/*------------  Aufgabe 3 ----------
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
*/




/* --------Aufgabe 3a ---------
context.fillStyle='blue';
context.fillRect(0, 0, 500, 500);
// ------ Haus -------
context.lineWidth = 10;
context.fillStyle='grey';
context.fillRect(75, 300, 150, 110);
context.fillStyle='black'
context.fillRect(130, 340, 40, 60);
context.beginPath();
context.moveTo(50, 300);
context.lineTo(150, 250);
context.lineTo(250, 300);
context.fill();
context.closePath();
context.stroke();

// ----- Boden ---------
context.lineWidth=30;
context.fillStyle = 'green';
context.fillRect(0, 410, 500, 90);


// -------- Wolke ---------
context.beginPath();
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);

context.closePath();
context.lineWidth = 5;
context.fillStyle = 'grey';
context.fill();
context.strokeStyle = 'black';
context.stroke();

// ------- Baum --------
context.fillStyle='brown';
context.fillRect(350, 250, 20, 200);
context.fillStyle='green';
context.beginPath();
context.arc(360, 250, 50, 0, Math.PI * 2, true);
context.fill();
*/




/*--------- Aufgabe 3b -------
interface Rechteck {
    x: number;
    y: number;
    höhe: number;
    breite: number;
}

function createRect() {
    let x = (Math.random() * (400 - 0)) + 0;
    let y = (Math.random() * (400 - 0)) + 0;
    let höhe = (Math.random() * (100 - 50)) + 50;
    let breite = (Math.random() * (100 - 50)) + 50;
    let maße: number[] = [x, y, höhe, breite];
    return maße;
}

function drawRect(array: number[]) {
    context.strokeRect(array[0], array[1], array[2], array[3]);
}

let rechteckArray = [createRect(), createRect(), createRect(), createRect(), createRect(), createRect()];

for(let i=0; i<rechteckArray.length; i++){
    drawRect(rechteckArray[i]);
}
*/
