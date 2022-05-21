"use script";

const addBtn = document.querySelector(".btn");
const skillBox = document.querySelector(".skills-container");
const input = document.querySelector(".inp");

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Enter") {
    inputValue = input.value;

    const firstPara = document.createElement("div");

    firstPara.textContent = inputValue;
    firstPara.setAttribute(
      "style",
      " width:auto; height:25px; border-radius:5px;text-align:center; justify-content:center; align-items:center; font-size:18px; font-family:monospace; color:maroon; background-color:rgb(35, 37, 46);color:white; "
    );

    skillBox.appendChild(firstPara);
  }
  //   alert(inputValue);

  addBtn.addEventListener("click", () => {
    inputValue = input.value;

    const firstPara = document.createElement("div");

    firstPara.textContent = inputValue;
    firstPara.setAttribute(
      "style",
      " width:auto; height:25px; border-radius:5px;text-align:center; justify-content:center; align-items:center; font-size:18px; font-family:monospace; color:maroon; background-color:rgb(35, 37, 46);color:white; "
    );

    skillBox.appendChild(firstPara);

    //   alert(inputValue);
  });
});
