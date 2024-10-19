const restaurants = [
    {
      name: "The Pasta House",
      location: "New York, NY",
      price: "$$",
      deliveryTime: "30 mins",
      image: "pasta.jpg"
    },
    {
      name: "Sushi Express",
      location: "New York, NY",
      price: "$$$",
      deliveryTime: "45 mins",
      image: "sushi.jpg"
    },
    {
      name: "Taco Delight",
      location: "New York, NY",
      price: "$",
      deliveryTime: "25 mins",
      image: "taco.jpg"
    },
    {
      name: "Burger Heaven",
      location: "New York, NY",
      price: "$$",
      deliveryTime: "35 mins",
      image: "burger.jpg"
    },
    {
      name: "Vegan Vibes",
      location: "New York, NY",
      price: "$$$",
      deliveryTime: "40 mins",
      image: "vegan.jpg"
    }
  ];
  
  document.getElementById('searchBtn').addEventListener('click', function () {
    const locationInput = document.getElementById('location').value;
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = ''; // Clear previous results
  
    if (locationInput) {
      const filteredRestaurants = restaurants.filter(restaurant => restaurant.location.toLowerCase() === locationInput.toLowerCase());
  
      if (filteredRestaurants.length > 0) {
        filteredRestaurants.forEach(restaurant => {
          const restaurantDiv = document.createElement('div');
          restaurantDiv.classList.add('restaurant');
          restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div>
              <h3>${restaurant.name}</h3>
              <p>Price: ${restaurant.price}</p>
              <p>Delivery Time: ${restaurant.deliveryTime}</p>
            </div>
          `;
          resultsSection.appendChild(restaurantDiv);
        });
      } else {
        resultsSection.innerHTML = <p>No restaurants found in your location.</p>;
      }
    } else {
      resultsSection.innerHTML = <p>Please enter a location.</p>;
    }
  });
