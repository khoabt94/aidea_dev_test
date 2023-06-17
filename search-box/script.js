////////// SELECTORS
import { people } from "./people.js";
const input = document.querySelector(".input");
const resultsContainer = document.querySelector(".results-container");
const sortAZ = document.querySelector(".sort__a-z");
const clearBtn = document.querySelector(".search-icon.search-icon__right");
input.focus();
let result = people;


/////////// MANIPULATE DATA
people.forEach((person) => {
  const newQuery = { ...person };
  newQuery.id = undefined;
  return (person.queryString = Object.values(newQuery).join(" ").toLowerCase());
});



//////////// HELPER FUNCTION
const updateResultBox = (results) => {
  const htmlResult = results
    .map((result) => {
      return `<div class="result-box">
    <img
      src="https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
      alt=""
    />
    <div class="text-box">
      <p class="name">${result.name}</p>
      <p class="address">${result.address}</p>
      <div class="tags">
        <span>${result.category}</span>
      </div>
    </div>
  </div>`;
    })
    .join("");
  resultsContainer.textContent = "";

  resultsContainer.insertAdjacentHTML("afterbegin", htmlResult);
};

const watchInput = (e) => {
  const query = e.target.value.toLowerCase();
  if (!query) {
    result = [];
    return;
  }
  result = people.filter((person) => {
    return person.queryString.includes(query);
  });
  console.log(query, result);

  updateResultBox(result);
};

const handleSort = (type = "a-z") => {
  if (type === "a-z") {
    result = result.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  updateResultBox(result);
};


//////////// ATTACH EVENTS
input.addEventListener("change", watchInput);
input.addEventListener("input", watchInput);

sortAZ.addEventListener("click", () => handleSort("a-z"));
clearBtn.addEventListener("click", () => {
  input.value = "";
  result = people;
  updateResultBox(result);
  input.focus();
});


//////////// INIT
updateResultBox(result);
