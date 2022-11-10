const stopButton = document.querySelector("#stopButton");
const stopLight = document.querySelector("#stopLight");
const slowButton = document.querySelector("#slowButton");
const slowLight = document.querySelector("#slowLight");
const goButton = document.querySelector("#goButton");
const goLight = document.querySelector("#goLight");

stopButton.addEventListener("click", function() {
  stopLight.classList.toggle("stop");
  
});

// stopButton.addEventListener("mouseenter", function(){
//   console.log(`Entered ${stopButton.innerText} button`)
// });

// stopButton.addEventListener("mouseleave", function() {
//   console.log(`Left ${stopButton.innerText} Button`);
// });

slowButton.addEventListener("click", function() {
  slowLight.classList.toggle("slow");
});

// slowButton.addEventListener("mouseenter", function() {
//   console.log(`Entered ${slowButton.innerText} Button`);
// });

// slowButton.addEventListener("mouseleave", function() {
//   console.log(`Left ${slowButton.innerText} Button`);
// })

goButton.addEventListener("click", function() {
  goLight.classList.toggle("go");

});

// goButton.addEventListener("mouseenter", function() {
//   console.log(`Entered ${goButton.innerText} Buton`);
// });

// goButton.addEventListener("mouseleave", function() {
//   console.log(`Left ${goButton.innerText} Button`);
// });


const addListeners = (button) => {
  button.addEventListener("mouseenter", function() {
    console.log(`Entered ${button.textContent} button`);
  })

  button.addEventListener("mouseleave", function() {
    console.log(`Left ${button.textContent} button`);
  })
};
addListeners(stopButton);
addListeners(slowButton);
addListeners(goButton);










