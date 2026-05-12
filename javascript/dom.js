// const div = document.getElementById("myDiv");
// const div = document.getElementsByClassName("container");
// const div = document.getElementsByTagName("div");

const div = document.querySelector("div");
const remove = document.querySelector("#remove");
const add = document.querySelector("#add");

console.log(div);

const changeColor = () => {
  div.style.backgroundColor = "black";
};

// const removeElement = () => {
//   div.style.display = "none";
// };
// const addElement = () => {
//   div.style.display = "block";
// };

add.addEventListener("click", () => {
  div.style.display = "block";
});

remove.addEventListener("click", () => {
  div.style.display = "none";
});

// div.innerHTML = "this is content form js";
const text = remove.innerHTML;
