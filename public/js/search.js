// get search bar element

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search");

const searchEvent = async (event) => {
  const search = searchInput.value;

  // get user search input converted to lowercase
  document.location.replace(`/${search}`);
};

// listen for user events
searchBtn.addEventListener("click", searchEvent);
