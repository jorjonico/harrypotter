fetch("http://gateway.marvel.com/v1/public/characters?apikey=162b9ead33e0a243ca8559b02b963569")
.then(response => response.json())
.then(data => console.log(data)) 