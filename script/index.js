const loadAllProducts = async () => {
    const url = "https://fakestoreapi.com/products"
    const res = await fetch(url);
    const products = await res.json();

    displayAllProduct(products)

    displayCategoryActive("all-btn");

}

const loadAllTrending = async () => {
    const url = "https://fakestoreapi.com/products"
    const res = await fetch(url);
    const products = await res.json();
    const trendingProducts = products.filter(product => product?.rating?.rate > 4.5).sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3);
    displayTrendingProduct(trendingProducts)

}


const loadAllCategory = async () => {
    const url = "https://fakestoreapi.com/products/categories"
    const res = await fetch(url);
    const categories = await res.json();
    displayCategory(categories)
}

const loadCategoryProducts = async (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`
    const res = await fetch(url)
    const categoryProducts = await res.json()
    console.log(categoryProducts)
    displayCategoryActive(category);
    displayCategoryProduct(categoryProducts)
}

const displayCategory = (categories) => {
    const categoryDiv = document.getElementById("category");

    categories.forEach((category) => {
        const categoryBtn = document.createElement("div");

        categoryBtn.innerHTML = `
            <button onclick="loadCategoryProducts(&quot;${category}&quot;)" 
                class="btn btn-outline btn-primary rounded-full category-btn" id="${category}">
                ${category}
            </button>
        `;

        categoryDiv.append(categoryBtn);
    });
};

const displayCategoryActive = (category) => {


    const categoryBtns = document.querySelectorAll(".category-btn");
    console.log(categoryBtns)
    categoryBtns.forEach(categoryBtn => {
        categoryBtn.classList.remove("btn-active")
    })
    const categoryBtn = document.getElementById(`${category}`);
    categoryBtn.classList.add("btn-active");

}

const displayTrendingProduct = (products) => {
    const productGrid = document.getElementById("trend-card");
    console.log("hello")

    products.forEach((product) => {
        console.log(product.title)
        const productCard = document.createElement("div");
        productCard.innerHTML = `
        <div class="col-span-1 shadow-lg bg-white h-full flex flex-col">


  <div class="bg-gray-100">
    <img src="${product.image}" class="h-[300px] w-full object-contain" alt="">
  </div>


  <div class="mt-4 flex flex-col flex-grow p-4">

    <div class="flex justify-between items-center">
      <div class="badge badge-soft badge-primary">
        ${product.category}
      </div>

      <div>
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating?.rate} (${product.rating?.count})
      </div>
    </div>

    <h2 class="text-lg font-medium py-2  truncate">
      ${product.title}
    </h2>

    <p class="text-xl font-bold">
      $${product.price}
    </p>

    
    <div class="flex justify-center gap-2 mt-auto pt-6">
      <button onclick="displayModal(${product.id})" class="btn btn-outline btn-primary w-1/2">
        <i class="fa-regular fa-eye"></i> Details
      </button>

      <button class="btn btn-primary w-1/2">
        <i class="fa-solid fa-cart-plus"></i> Add
      </button>
    </div>

  </div>
</div>

        `

        productGrid.append(productCard)

    });


}


const displayModal = async (productId) => {
    console.log(productId)
    const url = `https://fakestoreapi.com/products/${productId}`
    const res = await fetch(url);
    const product = await res.json();
    const modal = document.getElementById("modal");
    const my_modal = document.getElementById("my_modal_3");
    modal.innerHTML = "";
    modal.innerHTML = `
       <div class="col-span-1 shadow-lg bg-white h-full flex flex-col">


  <div class="bg-gray-100">
    <img src="${product.image}" class="h-[300px] w-full object-contain" alt="">
  </div>


  <div class="mt-4 flex flex-col flex-grow p-4">

    <div class="flex justify-between items-center">
      <div class="badge badge-soft badge-primary">
        ${product.category}
      </div>

      <div class="text-sm">
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating?.rate} (${product.rating?.count})
      </div>
    </div>
    <p class="text-xl font-bold">
      $${product.price}
    </p>

    <h2 class="text-lg font-medium py-2">
      ${product.title}
    </h2>
    <p class="">
      ${product.description}
    </p>

    

    
    <div class="flex justify-center gap-2 mt-auto pt-6">
      <button onclick="displayModal(${product.id})" class="btn btn-outline btn-primary w-1/2">
        <i class="fa-regular fa-eye"></i> Buy Now
      </button>

      <button class="btn btn-primary w-1/2">
        <i class="fa-solid fa-cart-plus"></i> Add to Cart
      </button>
    </div>

  </div>
</div>


            
        `
    my_modal.showModal();
}

const displayCategoryProduct = (products) => {
    const productGrid = document.getElementById("product-card");
    productGrid.innerHTML = "";
    products.forEach((product) => {
        console.log(product.title)
        const productCard = document.createElement("div");
        productCard.innerHTML = `
        <div class="col-span-1 shadow-lg bg-white h-full flex flex-col">


  <div class="bg-gray-100">
    <img src="${product.image}" class="h-[300px] w-full object-contain" alt="">
  </div>


  <div class="mt-4 flex flex-col flex-grow p-4">

    <div class="flex justify-between items-center">
      <div class="badge badge-soft badge-primary">
        ${product.category}
      </div>

      <div>
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating?.rate} (${product.rating?.count})
      </div>
    </div>

    <h2 class="text-lg font-medium py-2  truncate">
      ${product.title}
    </h2>

    <p class="text-xl font-bold">
      $${product.price}
    </p>

    
    <div class="flex justify-center gap-2 mt-auto pt-6">
      <button onclick="displayModal(${product.id})" class="btn btn-outline btn-primary w-1/2">
        <i class="fa-regular fa-eye"></i> Details
      </button>

      <button class="btn btn-primary w-1/2">
        <i class="fa-solid fa-cart-plus"></i> Add
      </button>
    </div>

  </div>
</div>

        `

        productGrid.append(productCard)

    });


}






const displayAllProduct = (products) => {
    const productGrid = document.getElementById("product-card");
    productGrid.innerHTML = "";
    products.forEach((product) => {
        console.log(product.title)
        const productCard = document.createElement("div");
        productCard.innerHTML = `
        <div class="col-span-1 shadow-lg bg-white h-full flex flex-col">


  <div class="bg-gray-100">
    <img src="${product.image}" class="h-[300px] w-full object-contain" alt="">
  </div>


  <div class="mt-4 flex flex-col flex-grow p-4">

    <div class="flex justify-between items-center">
      <div class="badge badge-soft badge-primary">
        ${product.category}
      </div>

      <div class="text-sm">
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating?.rate} (${product.rating?.count})
      </div>
    </div>

    <h2 class="text-lg font-medium py-2  truncate">
      ${product.title}
    </h2>

    <p class="text-xl font-bold">
      $${product.price}
    </p>

    
    <div class="flex justify-center gap-2 mt-auto pt-6">
      <button onclick="displayModal(${product.id})" class="btn btn-outline btn-primary w-1/2">
        <i class="fa-regular fa-eye"></i> Details
      </button>

      <button class="btn btn-primary w-1/2">
        <i class="fa-solid fa-cart-plus"></i> Add
      </button>
    </div>

  </div>
</div>

        `

        productGrid.append(productCard)

    });


}

loadAllCategory()
loadAllProducts()
loadAllTrending()
