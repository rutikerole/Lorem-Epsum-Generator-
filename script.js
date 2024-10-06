// Step 1: Declare Variables
  const loremWords = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];
  
  const form = document.getElementById("generator-form"); // The form element
  
  const paragraphCountRange = document.getElementById("paragraph-count"); // Range input for number of paragraphs
  const wordCountRange = document.getElementById("word-count"); // Range input for words per paragraph
  
  const paragraphOutput = document.getElementById("paragraph-output"); // Display for paragraph count
  const wordOutput = document.getElementById("word-output"); // Display for word count
  
  const resultDiv = document.getElementById("result"); // Container for displaying generated paragraphs
  


// Step 2: Define Function to generate a paragraph with a specified number of random words
const generateParagraph = (wordCount) => {
    let paragraph = []; // Initialize an empty array to hold the words

    // Loop for the specified number of words
    for (let i = 0; i < wordCount; i++) {
        // Select a random index from the loremWords array
        const randomIndex = Math.floor(Math.random() * loremWords.length);
        // Add the random word to the paragraph array
        paragraph.push(loremWords[randomIndex]);
    }

    // Join the words in the array into a single string with spaces in between
    return paragraph.join(' ');
};

  



// Step 3: Set Up Event Listeners for when the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
      // Update displayed paragraph count when range input changes
      paragraphCountRange.addEventListener("input", () => {
          paragraphOutput.textContent = paragraphCountRange.value; // Show current value
      });
  
      // Update displayed word count when range input changes
      wordCountRange.addEventListener("input", () => {
          wordOutput.textContent = wordCountRange.value; // Show current value
      });
  
      // Handle form submission to generate and display paragraphs
      form.addEventListener("submit", (e) => {
          e.preventDefault(); // Prevent the default form submission action (page reload)
          resultDiv.innerHTML = ''; // Clear old results to avoid appending to previous ones
  
          // Loop to generate the specified number of paragraphs
          for (let i = 0; i < paragraphCountRange.value; i++) {
              const paragraphElement = document.createElement('p'); // Create a new paragraph element
              paragraphElement.textContent = generateParagraph(wordCountRange.value); // Generate and set its text
              resultDiv.appendChild(paragraphElement); // Append the paragraph to the result container
          }
      });
  });
  