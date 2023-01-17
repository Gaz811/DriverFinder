function search() {
  console.log("search function called");
  var input = document.getElementById("search-input").value;
  if (input === "2651") {
    fetch('anotherpage.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById("search-result").innerHTML = data;
    });
  } else {
    document.getElementById("search-result").innerHTML = "<h1>You searched for " + input + "</h1><p>No results found</p>";
  }
  return false;
}
