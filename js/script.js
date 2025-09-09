
const categories =  document.getElementById('categories')
categories.innerHTML = `<div class="md:grid">
          <button class="btn md:btn-block hover:bg-green-700 hover:text-white">
            Add to Cart
          </button>
        </div>`;


const cardsContainer = document.getElementById("cards-container");
// cardsContainer.innerHTML =

const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url).then(res => res.json()).then(json => console.log(json)
    )
}
loadCategories()