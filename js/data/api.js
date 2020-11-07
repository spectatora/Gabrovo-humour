// Use the Fetch API & ES6
fetch('data/sources.json')
.then(response => response.json())
.then(data => {
    // Do something with your data
    console.log(data);
});