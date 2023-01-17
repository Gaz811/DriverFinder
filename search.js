function search() {
    var input = document.getElementById("search-input").value;
    if (input === "2651") {
      fetch('2651.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById("search-result").innerHTML = data;
      });
    } else {
      document.getElementById("search-result").innerHTML = "<h1>You searched for " + input + "</h1><p>No results found</p>";
    }
    return false;
  }
  