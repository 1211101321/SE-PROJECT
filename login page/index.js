document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const username = document.getElementById('myUsername').value;
    const password = document.getElementById('myPassword').value;

    // You can perform validation or send the data to a server here
    console.log('Username:', username);
    console.log('Password:', password);
});