const myName = " poatato";

console.log("hello" + myName);
console.log(5 + 2);
//

function sayHello(nameOfPerson, age) {
  console.log(
    "Hello my name is " + nameOfPerson + " I am " + age + " years old."
  );
}

sayHello("potato", 26);
sayHello("moonsik", 33);
sayHello("hamsik", 29);

//나누기 계산기 시작//

function divide(a, b) {
  console.log(a / b);
}

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

divide(6, 3);

plus(8, 9);
//player object start//

const player = {
  name: "shumalko",
  sayHi: function (otherPersonName) {
    console.log(
      "Hi it's me. I am " + otherPersonName + ". Nice to see you again"
    );
  },
};
console.log(player.name);
player.sayHi("shumalko");
player.sayHi("moonsik");
//update player name
player.name = "shumalkko";
console.log(player.name);
//update end
console.log(player);
player.sayHi("supermallangkoddaggi");

//array
const toBuy = ["pizza", "chicken", "coke", "soda"];
console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy[2]);
toBuy.push("cheese");
console.log(toBuy);
//calculator(assignment)

const calculator = {
  add: function (a, b) {
    console.log("a+b는 ", a + b, "입니다.");
  },
  //minus start
  minus: function (a, b) {
    console.log(a - b);
  },
  //제곱?start
  squareRoot: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(3, 6);
calculator.minus(6, 3);
calculator.squareRoot(2, 3);

//return//...

const calculator1 = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

const resultAdd = calculator1.add(3, 6);
const resultMinus = calculator1.minus(resultAdd, 3);
const resultDivide = calculator1.divide(resultMinus, 6);

console.log(resultAdd);
console.log(resultMinus);
console.log(resultDivide);
//return fin//
//#2.13 example1//
const age = prompt("국제 나이로 당신은 몇살인가요?");
console.log(parseInt(age));
const krAge = parseInt(age) + 2;
console.log("I am " + krAge + "years old.");
//example1 end//
//example2 start//
const fatness = prompt("How tall are you?");
console.log(parseInt(fatness));
const howfat = parseInt(fatness) - parseInt(100);
console.log("You should weigh " + howfat + " kg.");
//example2 fin//

//2.14 conditional part2//
const age1 = prompt("how old are you?");
console.log(isNaN(age1));
if (isNaN(age1)) {
  console.log("Please write a number");
} else {
  console.log("Thanks for writing your age");
}
//alchol calculater(2.15,conditional part3)

const age2 = prompt("How old are you?");

if (isNaN(age2)) {
  console.log("Plsease write a number");
} else if (age2 < 20) {
  console.log("You are too young to drink!");
} else {
  console.log("Enjoy!");
}
//alchol2 s
const age3 = prompt("How oold are you?");
if (isNaN(age3) || age < 0) {
  console.log("please write a n!(positive number)");
} else if (age3 < 19) {
  console.log("You are baby! Do not drink!");
} else if (age3 >= 20 && age3 < 70) {
  console.log("본에피티!");
} else if (age3 > 70) {
  console.log("You have to think your age...Becareful!");
} //100이 맞다면-> age3===100이라고 쓰면 되고, 아니라면 !==라고 쓰면 됨
//alcohol2 end

//addevnetlist start//

const h1 = document.querySelector(".hello h1");
function handleTitleClick() {
  console.log("title was clicked!");
  h1.style.color = "blue";
}
h1.addEventListener("click", handleTitleClick);

function handleMouseFunction() {
  console.log("mouse is here");
  h1.innerText = "mouse is here!";

  const currentColor = h1.style.color;
  let newColor; //let은 variable한 변수

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  h1.classList.toggle("active");
}

function handleMouseLeave() {
  console.log("mouse is leave!");
  h1.innerText = "mouse is gone";
}
h1.addEventListener("mouseenter", handleMouseFunction);
h1.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
function handleWindowCopy() {
  alert("copier!");
  console.log("Your page is copied!");
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline() {
  alert("Your WIFI is not connected");
}
window.addEventListener("offline", handleWindowOffline);

function handleWindowOnline() {
  alert("All goood~");
}
window.addEventListener("online", handleWindowOnline);
//addeventlist end//
