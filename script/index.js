const loadAllProducts = async () => {
    const url = "https://fakestoreapi.com/products"
    const res = await fetch(url);
    const products = await res.json();
    displayProduct(products)

}

const displayProduct = (products) => {
    const productGrid = document.getElementById("product-card");
    productGrid.innerHTML = "";
    products.forEach((product) => {
        console.log(product.title)
        const productCard = document.createElement("div");
        productCard.innerHTML = `
        <div class="col-span-1 shadow-lg p-4 bg-white h-full flex flex-col">


  <div class="bg-gray-100">
    <img src="${product.image}" class="h-[300px] w-full object-contain" alt="">
  </div>


  <div class="mt-4 flex flex-col flex-grow">

    <div class="flex justify-between items-center">
      <div class="badge badge-soft badge-primary">
        ${product.category}
      </div>

      <div>
        <i class="fa-solid fa-star text-yellow-500"></i>
        ${product.rating?.rate} (${product.rating?.count})
      </div>
    </div>

    <h2 class="text-lg font-medium py-2">
      ${product.title}
    </h2>

    <p class="text-xl font-bold">
      $${product.price}
    </p>

    
    <div class="flex justify-center gap-2 mt-auto pt-6">
      <button class="btn btn-outline btn-primary w-1/2">
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


loadAllProducts()