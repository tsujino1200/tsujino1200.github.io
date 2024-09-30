const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/anko_tsubu.png") {
    myImage.setAttribute("src", "images/anko_koshi.png");
  } else {
    myImage.setAttribute("src", "images/anko_tsubu.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = `${myName} さん、あんこが切り替わるサイトですよ`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};