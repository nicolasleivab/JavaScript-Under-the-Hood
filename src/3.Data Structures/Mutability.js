/* Arrays mutability */


/* Objects mutability */


/* const*/

const ARR = [1, 3, 7];

//ARR = [3, 4, 6]; What do you think will happen? Why?
//ARR.push(11); and here?

console.log(ARR);

/*Defining variables with const allows us to block the value of the variable
so it can't be modified later */

/* In the second case we are not changing the constant's value, we are only changing the 
values which the constant is pointing to.
Revise By Value and By Reference lecture: 
https://github.com/nicolasleivab/JavaScript-Under-the-Hood/tree/master/By_Value_vs_By_Reference
*/

/* Note: ES6 hoisting works differently, you need to declare let 
and const before using them */
