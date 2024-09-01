document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Logged in successfully!');
});

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('results').innerText = 'Showing search results...';
});

document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Ride posted successfully!');
});
