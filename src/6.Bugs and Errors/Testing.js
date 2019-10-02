/* Testing */

/*
Tests can be seen as small labeled programs that verify pieces or aspects
of your code. Knowing how to write tests can help you to verify if your 
program behaves properly in any situation, which can save you a lot of time
in comparison to manually checking your program for errors.
*/

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`); //will fail if it returns false
}

/*
The label should contain a message with the expected result.
For this excercise, a simple text generator function will be tested
as an example.
*/

function textGenerator(name, age) {
    return (`${name} is ${age} years old`);
}

test("should output name and age", () => {
    return textGenerator('Froncio', 33) == "Froncio is 33 years old";
})

test ("should output default text", () => {
    return textGenerator('','') == " is  years old";
})



/* Debugging */






