//EX:1 Program that calculates area of a rectangle
let Length: number = 50
let Width: number = 20
let Area= Length*Width
console.log(`Area of the rectangle is ${Area}`)

//EX:2 Program that calculates voulume of a cube
let area: number = 5            //Volume of cube = Area*Area*Area
let volume_of_cube = area**3
console.log(`Volume of the cube is ${volume_of_cube}`)

//EX:3 Program that checks if a number is Positive, Negative or Zero
let x: number = -88
if (x==0){
    console.log("Given number is Zero")
}
else if(x>0){
    console.log("Given number is positive")
}
else {console.log("given number is Negative")}

//EX:4 Program that check if a number is even or odd
let z: number= 50
if (z%2==0){ console.log("Given number is Even")}
else { console.log("Given number is Odd")}

//EX:5 Program which determines if a person is eligible to vote based on their age
let Age: number= 10
if (Age>=18){
    console.log("You are eligible to vote")
}
else {console.log("You are under aged")}

//