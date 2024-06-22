const acArr = ["LG", "Samsung", "Mitsubishi", "Hitachi", "Carrier", "OGeneral"]; //Array of AC brands

document.addEventListener("DOMContentLoaded", () => {
  /**
   * The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
   * without waiting for stylesheets, images, frames, and async script <script async src="..."> to complete loading
   */
  const mainDiv = document.getElementsByClassName("main-container");
  mainDiv[0].setAttribute("id", "container"); // using setAttribute, adding attribute "id" with value "container" to the first indexed HTML collection of main-container class
  const container = document.getElementById("container");
  const ul = document.createElement("ul"); // creating new HTML element "ul" using createElement

  //   for (let i = 0; i < acArr.length; i++) {
  //     const li = document.createElement("li");
  //     li.textContent = acArr[i];
  //     ul.appendChild(li);
  //   }
  //   debugger;
  acArr.forEach((element) => {
    const li = document.createElement("li"); // its create add new HTML element in the page (li).
    // li.textContent = element;
    li.innerHTML = `<strong>${element}</strong>`; //The innerHTML property is useful for getting or replacing the content of HTML elements
    // li.textContent = `<strong>${element}</strong>`;   //string type
    ul.appendChild(li); //append li into ul
  });

  ul.style.listStyle = "square"; //its css through js bullets changes

  container.appendChild(ul); //append ul into container,container is main div
});

// Alternate Color

document.addEventListener("DOMContentLoaded", () => {
  const colorDiv = document.getElementById("alternate-color-problem");
  const ul = document.createElement("ul");

  ul.classList.add("ac-list"); //ac-list is a class

  acArr.forEach((element, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong class=${
      (index + 1) % 2 === 1 ? "red" : (index + 1) % 2 === 0 ? "green" : "yellow"
    }>${element}</strong>`;

    // li.innerHTML = `<strong>${element}</strong>`;
    ul.appendChild(li);
  });
  colorDiv.appendChild(ul);

  //   Scenario 1 => Targeting single/first li
  //   const liSelector = document.querySelector(".ac-list li");
  //   liSelector.addEventListener("click", (e) => {
  //     alert(e.target.innerHTML);
  //   });

  // Scenario 2 => targeting all lis
  //   const liSelector = document.querySelectorAll(".ac-list li");
  //   //   const liSelector = document.getElementsByTagName("li");
  //   console.log({ liSelector });
  //   liSelector.forEach((li) => {
  //     li.addEventListener("click", (e) => {
  //       alert(e.target.innerHTML);
  //     });
  //   });

  //   Scenario 3 => Event Delegation => Targeting parent of lis i.e., targeting ul.
  const acList = document.getElementsByClassName("ac-list")[0];
  acList.addEventListener("click", (e) => {
    alert(e.target.innerHTML);
  });
});



