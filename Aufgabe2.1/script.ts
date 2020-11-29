/*   Aufgabe a)   */
function multiply(a: number, b: number) {
    let result: number = a * b;
    console.log(result);
}

/*   Aufgabe b)   */
function max(a: number, b: number) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

/*   Aufgabe c)
let i: number = 1, temp: number = 0;
while(i<=100){
    i++;
    temp+=i;
}
console.log(temp);
*/

/*  Aufgabe d)
for(var i=0; i<10; i++){
    let randomNumber:number = Math.random()*100;
    console.log(randomNumber);
}
*/


/*   Aufgabe e)
factorial(5);
function factorial(n:number){
    let result: number=1;
    if(n<1){
        console.log("1");
    } else {
        for(var i=1; i<=n; i++) {
            result=result*i;
        }
        console.log(result);
    }
}
*/


/*   Aufgabe f)   */
function leapyear() {
    for (var i = 1900; i <= 2020; i++) {
        if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
            console.log(i);
        }
    }
}

/*  Aufgabe 6a)
let kreuz: string = '#', symbol:string="#";
console.log(kreuz);
for(var i=2; i<8; i++){
    kreuz +=symbol;
    console.log(kreuz);
}
*/


/*   Aufgabe 6b+c)
for(var i=1; i<100; i++){
    if(i%5==0 && i%3==0){
        console.log("FizzBuzz");
    } else if(i%5==0 && i%3!=0){
        console.log("Buzz");
    } else if(i%3==0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
*/

/*   Aufgabe 6d+e  */
schach(8);

function schach(size: number): void {
    for (let i: number = 0; i < size; i++) {
        let line: string = " ";
        for (let k: number = 0; k < size; k++) {
            if ((i + k + 1) % 2 == 0) {
                line += "#";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}
