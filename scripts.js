//NOTE Clicking the website title refreshes the page to its original drinks

let drinks = coffees

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < drinks.length; i++) {
    title = drinks[i].title;
    imageURL = drinks[i].poster;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, i); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

//Displays the cards content and also allows the cards to be clicked and redirected to a new page detailing that drink
function editCardContent(card, newTitle, newImageURL, i) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Pic";

  const cardBullets = card.querySelector("#tag")
  cardBullets.innerHTML=""

  for (let j=0; j < drinks[i].bulletPoints.length; j++) {
    const li = document.createElement("h3");
    li.textContent = drinks[i].bulletPoints[j];
    cardBullets.appendChild(li);
  }

  card.onclick = () => {
    const cardData = {
      title: drinks[i].title,
      description: drinks[i].description,
      poster: drinks[i].poster 
    };
    localStorage.setItem("selectedCard", JSON.stringify(cardData));
    window.location.href = "details.html";
  };
}


document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Hope you love some of my favorite coffees and teas!!!"
  );
}

function removeLastCard() {
  coffees.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}


//This function is used to dynamically populate the sidebar with specific buttons to allow easier future additions
function populateSidebar() {
  const sidebar = document.getElementById('sidebar');
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = category;
    btn.style.display = 'block';
    btn.style.marginBottom = '10px';
    btn.onclick = () => displayCategory(category);
    sidebar.appendChild(btn);
  });
}


//Displays the drinks that have the matching category
function displayCategory(selectedCategory) {
  if (selectedCategory == "Remove Card")
    removeLastCard();
  else
    drinks = coffees.filter(drink => drink.category.includes(selectedCategory));

  showCards();
}

function resetCards() {
  drinks = coffees; // Reset the filtered array
  showCards();      // Show all cards again
}


//function for searching drinks based off name, tags, or category
function searchDrinks() {
  const searchQuery = document.getElementById('search-input').value.toLowerCase();
  
  drinks = coffees.filter(drink => {
    const titleMatch = drink.title.toLowerCase().includes(searchQuery);
    const categoryMatch = drink.category.some(category => category.toLowerCase().includes(searchQuery));
    const bulletPointsMatch = drink.bulletPoints.some(bulletPoint => bulletPoint.toLowerCase().includes(searchQuery));
  
    return titleMatch || categoryMatch || bulletPointsMatch;
  });
  
  showCards();
}

window.onload = () => {
  populateSidebar();
  searchDrinks(); 
};


