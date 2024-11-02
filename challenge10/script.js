function countingWords(text) {
  let rawText = text.split(" ");

  let space = [];

  rawText.forEach((textValue) => {
    if (textValue !== "") {
      space.push(textValue);
    }
  });

  const count = rawText.length;

  return count;
}

const testText = prompt("Enter your text", "Here");

if (testText) {
  alert(countingWords(testText));
} else alert("Erorr...");
