// Identifying odd and even numbers *11*

// ------------------------------

// create variable 
let numberValue 

//  get user input with prompt
let getInputValue = prompt("Enter the desired number")



// Checking whether it is even or odd
if (getInputValue % 2 === 0 ){

    // Check for even
    document.body.innerHTML = `Your number is even`;
    
}else {

    // Check for odd
    document.body.innerHTML = `Your number is odd`;

}