
           

const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayCategories(json));
};
// const loadCategories = () => {
//     const url = "https://openapi.programming-hero.com/api/plants";
//     fetch(url).then(res => res.json()).then(json => displayCategories(json)
//     )
// }

const displayCategories = (json) => {
  const categories = json.categories;
    // console.log(categories);
    // 1. get the el and empty
    const categoryContainer = document.getElementById("categories");
    // 2.get into every with loop
    categories.forEach(category => {        
        // 3. create el & add html
        const buttonDiv = document.createElement('div')
            buttonDiv.innerHTML = `
            <button onclick="loadCategoryPlants(${category.id})" id="lesson-btn-${category.id}" class="btn md:btn-block hover:bg-green-700 hover:text-white">
                  ${category.category_name}  
            </button>
            `;
        // 4. append
        categoryContainer.append(buttonDiv)
        
    });
};

// category_name: "Fruit Tree";
// id: 1;
// small_description: "Trees that bear edible fruits like mango, guava, and jackfruit.";

const loadAllPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url).then(res => res.json()).then(json => displayPlant(json.plants)
    )
}

const displayPlant = (plants) => {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
    // console.log(plants);
    
    
    plants.forEach(plant => {
        // console.log(plant);
        
        const plantCard = document.createElement('div')
        plantCard.innerHTML = `
        <div class="card bg-base-100 w-60 h-100 bg-cover bg-center shadow-sm">
            <figure >
              <img 
              src="${plant.image}"
              class="rounded-xl object-cover p-2"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${plant.name}</h2>
            <p class="overflow-hidden text-ellipsis whitespace-nowrap">${plant.description}</p>
            <div class="flex justify-between">
              <div class="badge badge-soft badge-success">${plant.category}</div>
              <span class="text-xl">${plant.price}</span>
            </div>
            <div class="card-actions">
              <button class="btn btn-block bg-green-700 text-white rounded-4xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        `;
           
        // 4. append
        cardsContainer.append(plantCard)
        
    })
}






const loadCategoryPlants = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url).then(res => res.json()).then(json => {
        console.log(json.plants);
        
        const clickBtn = document.getElementById(`lesson-btn-${id}`)
        clickBtn.classList.add('active');
        displayPlant(json.plants)
})
}
// const loadAllPlants = () => {
//     const url = "https://openapi.programming-hero.com/api/plants";
//     fetch(url).then(res => res.json()).then(json => console.log(json.)
//     )
// }
// const loadAllPlants = () => {
//     const url = "https://openapi.programming-hero.com/api/plants";
//     fetch(url).then(res => res.json()).then(json => console.log(json.)
//     )
// }
loadAllPlants()
loadCategories();


// 
// Get 🌴plants by categories
// https://openapi.programming-hero.com/api/category/${id}
// https://openapi.programming-hero.com/api/category/1
// Get 🌴Plants Detail
// https://openapi.programming-hero.com/api/plant/${id}
// https://openapi.programming-hero.com/api/plant/1