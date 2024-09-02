let content = document.querySelector('.content')
let btn = document.getElementById("btn");
let input = document.getElementById('input')

btn.addEventListener('click', clicked)
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents the default form submit behavior if inside a form
    clicked(); // Calls the same function as the button click
  }
});


function clicked(){
    if (checkQuestions()) {
      console.log("true block");
      return;
    } else {
      console.log("else block");
      orElse();
    }
}

function checkQuestions() {
  var data = input.value.toLowerCase();
  return userQuestions.some((ans) => {
    if (data === ans.que) {
      createElements(data, ans.ans);
      return true;
    }
    return false;
  });
}


function orElse(){
  var outputData = displayOutput[Math.floor(Math.random() * displayOutput.length)];
  var data = input.value;
  createElements(data, outputData);
}

let displayOutput = [
    'Hello, how can i help you Buddy!',
    'Hey there!',
    'Whats your problem!',
    'How can i help you!',
    'Hey man!'
]

let userQuestions = [
    {que : "who are you?", ans : "Hi! I'm Chitti, Speed 1 terahertz, Memory 1 GetaByte..."},
    {que : "who are you", ans : "Hi! I'm Chitti, Speed 1 terahertz, Memory 1 GetaByte..."},
    {que : "how are you?", ans : "Thanks for asking me! I'm good. What about you?"},
    {que : "how are you", ans : "Thanks for asking me! I'm good. What about you?"},
    {que : "where are you?", ans : "I am in the web browser!!"},
    {que : "where are you", ans : "I am in the web browser!!"},
    {que : "hi", ans : "Hii! How can i help you!"},
    {que : "hello", ans : "Hello Buddy, How can i help you!"},
]


function createElements(userData, outputData){
    let userInput = document.createElement("p");
    let output = document.createElement("p");
    let roboLogo = document.createElement("i");
    let userLogo = document.createElement("i");
    let spanUser = document.createElement("span");
    let spanRobo = document.createElement("span");

    roboLogo.classList = "fa-solid fa-robot";
    userLogo.classList = "fa-solid fa-user";
    spanUser.className = "span-user";
    spanRobo.className = "span-robo";
    spanUser.appendChild(userLogo);
    spanRobo.appendChild(roboLogo);
    output.className = "robo";
    // output.innerHTML = displayOutput[Math.floor(Math.random() * displayOutput.length)];
    output.innerHTML = outputData;
    userInput.innerHTML = userData;
    userInput.className = "userInput";
    userInput.appendChild(spanUser);
    output.appendChild(spanRobo);

    content.appendChild(userInput);
    content.appendChild(output);

    content.scrollTop = content.scrollHeight;
}