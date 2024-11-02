// Count the number of words in the text *10*

// ------------------------------

// function for counting words
function countingWords(text) {
  // break the string with the split method
  let rawText = text.split(" ");

  let space = [];

  // A loop to do: delete extra spaces and count the finalized words
  rawText.forEach((textValue) => {
    // Find extra spaces and remove them
    if (textValue !== "") {
      space.push(textValue);
    }
  });

  // Final word count with the length method
  const count = rawText.length;

  // get output
  return count;
}

// View the program

//We get the user's desired input with the prompt
const testText = prompt("Enter your text", "Here");

// show the result to the user in the form of an alert
if (testText) {
  alert(countingWords(testText));
} else alert("Erorr...");
