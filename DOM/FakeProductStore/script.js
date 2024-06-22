/**
 * Problem Statement:
 * Create a vanilla js application that consumes the https://fakestoreapi.com/products?sort=asc API and
 * displays a list of products in ascending order based on price. The application should also include a dropdown
 * to allow the user to change the sorting of the products between ascending and descending. When the user changes
 * the sorting order, the application should update the query parameter value product Listing Page and
 * fetch the products with the new sorting order.
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  /**
   * 1) Hit API and fetch the product list
   * 2) Display the product list fetched from the api
   * 3) Handle Loading state b/w step 1 & 2
   * 4) Handle change event of sort order select
   */

  const productListingDiv = document.getElementById("product-listing");
  const sortOrderSelect = document.getElementById("sort-order");

  const fetchProducts = (sortingOrder = "asc") => {
    productListingDiv.innerHTML = "<h2>Loading...</h2>";
    fetch(`https://fakestoreapi.com/products?sort=${sortingOrder}`)
      .then((response) => response.json())
      .then((result) => displayProducts(result, sortingOrder))
      .catch((error) => console.log("error", error));
  };

  const displayProducts = (result, sortingOrder) => {
    if (!result || result.length === 0) {
      productListingDiv.innerHTML = "<h2>No Product available</h2>";
      return;
    }

    result.sort((a, b) =>
      sortingOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    let allProducts = "";
    result.forEach((product) => {
      allProducts += `<div class="product">
          <img
            src="${product.image}"
            alt="${product.title}"
            class="product-image"
          />
          <div class="product-description">
            <h2>
              ${product.title} <small class="product-category">(${product.category})</small>
            </h2>
            <p>${product.description}</p>
            <strong>$${product.price}</strong> with <em>${product.rating.rate}</em> rating
          </div>
        </div>`;
    });
    productListingDiv.innerHTML = allProducts;
  };

  sortOrderSelect.addEventListener("change", (e) => {
    fetchProducts(e.target.value);
  });

  fetchProducts();
});
