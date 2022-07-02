const restaurantList = document.querySelector('.restaurant-data')

fetch('http://localhost:4002/')
    .then(response => response.json())
    .then(restaurantList => {
        let html = ''
        restaurantList.forEach(restaurant => {
            let htmlData = 
            `<div class="restaurant-data"></div>
            <img src="${restaurant.photoUrl}">
            <h3>${restaurant.name}</h3>
            <h4>Rating: ${restaurant.rating}/h4>
            <p>${restaurant.address}</p>`

        html += htmlData
        });
        restaurantList.innerHTML = html
    })

    .catch(error => console.error(error))