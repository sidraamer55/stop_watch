// const firstParagraph = document.querySelector('.text');
// console.log(firstParagraph.textContent); 

const allParagraphs = document.querySelectorAll('.text');
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
// Outputs:
// Hello World
// Goodbye World