const cardsContainer = document.getElementById("cards-container");
// cardsContainer.innerHTML =

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
    console.log(categories);
    // 1. get the el and empty
    const categoryContainer = document.getElementById("categories");
    // 2.get into every with loop
    categories.forEach(category  => {
        // 3. create el & add html
        const buttonDiv = document.createElement('div')
            buttonDiv.innerHTML =`
            <button class="btn md:btn-block hover:bg-green-700 hover:text-white">
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

loadCategories();
