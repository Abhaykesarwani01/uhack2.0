const openProblem1 = document.querySelector("#openProblem1");
const openProblem2 = document.querySelector("#openProblem2");
const openProblem3 = document.querySelector("#openProblem3");
const openProblem4 = document.querySelector("#openProblem4");
const openProblem5 = document.querySelector("#openProblem5");


// const basicDialog = document.querySelector("#basicDialog");
// const basicDialogModal = document.querySelector("#basicDialogModal");
// const dialogWithBackdrop = document.querySelector("#dialogWithBackdrop");
// const dialogWithAnimation = document.querySelector("#dialogWithAnimation");
const output = document.querySelector("output");

// "Show the dialog" button opens the <dialog> 
openProblem1.addEventListener('click', () => {
    Problem1.showModal();
});

openProblem2.addEventListener('click', () => {
    Problem2.showModal();
});

openProblem3.addEventListener('click', () => {
    Problem3.showModal();
});

openProblem4.addEventListener('click', () => {
    Problem4.showModal();
});

openProblem5.addEventListener('click', () => {
    Problem5.showModal();
});







// // "Show the dialog modally" button opens the <dialog> modally
// openBasicDialogModal.addEventListener('click', () => {
//     basicDialogModal.showModal();
// });

// // "Show the dialog with custom backdrop" button opens the <dialog> modally
// openDialogWithBackdrop.addEventListener('click', () => {
//     dialogWithBackdrop.showModal();
// });

// // "Show the dialog with animation" button opens the <dialog> modally
// openDialogWithAnimation.addEventListener('click', () => {
//     dialogWithAnimation.showModal();
// });

[basicDialog, dialogWithBackdrop, dialogWithAnimation].forEach(element => element.addEventListener("close", function () {
    output.value = `✨ You clicked ${element.returnValue}`;
}));
