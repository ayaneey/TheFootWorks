// get search bar element

const searchInput = document.getElementById("searchInput");
const button = document.getElementById("search");

// store name elements in array-like object

const namesFromDOM = document.getElementsByClassName("name");

// listen for user events

button.addEventListener("click", (event) => {
  const search = searchInput.value;
  console.log(searchInput.value);

  // get user search input converted to lowercase

  //post call to the /:id pass the searchInput.value
  const response = await fetch("/:name", {
    method: "POST",
    body: JSON.stringify({ search }),
    headers: { "Content-Type": "application/json" },
  });
});
