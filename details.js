const cardData = JSON.parse(localStorage.getItem("selectedCard"));


  const titleEl = document.getElementById("drink-title");
  const imageEl = document.getElementById("drink-image");
  const descList = document.getElementById("drink-description");

  titleEl.textContent = cardData.title;
  imageEl.src = cardData.poster;
  imageEl.alt = cardData.title;
  imageEl.style.display = "block";

  descList.innerHTML = ""; 
  descList.textContent = cardData.description


function goHome() {
  window.location.href = "index.html";
}
