const restaurantList = document.getElementById('restaurants')

fetch('http://localhost:4002/')
    .then(response => response.json())
    .then(restaurants => {
        let html = ''
        restaurants.forEach(restaurant => {
            let htmlData = 
            `<img src="${restaurant.photoUrl}">
            <h3>${restaurant.name}</h3>
            <h4>Rating: ${restaurant.rating}/h4>
            <p>${restaurant.address}</p>`

        html += htmlData
    });
        // console.log(html)
        // console.log(restaurantList.innerHTML)
        restaurantList.innerHTML = html
    })

    .catch(error => console.error(error))