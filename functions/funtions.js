// Function  statement or Function Declaration
function a(){
    console.log("hello")
}

// Function Expression

var b = function (){

}

// Named function expression

var b = function x(){
    console.log(x)
}
b()
//error
x()

//Anonymous function
function (){

}
//had syntax error

// first class funtion -> return function

function a(){
    return function (){

    }
}
when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

Examples
Assigning a function to a variable
JS
Copy to Clipboard

const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the