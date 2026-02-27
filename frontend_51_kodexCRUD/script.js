// let productList = JSON.parse(localStorage.getItem("products")) || [];

const productList = [
  {
    name: "Apple",
    image: "https://media.istockphoto.com/id/173541478/photo/numerous-baskets-of-apples.jpg?s=612x612&w=0&k=20&c=QNGIvEaoE_voj6djgRhavL4ZblGKwnCKXGVt8S0BGB4=",
    description: "Fresh and juicy red apples.",
    category: "fruits",
    price: 120,
    stock: 50
  },
  {
    name: "Milk",
    image: "https://yobudde.com/cdn/shop/files/amul-gold-full-cream-milk-pouch-500-ml.webp?v=1724738810",
    description: "1 litre full cream milk.",
    category: "dairy",
    price: 60,
    stock: 100
  },
  {
    name: "Coca Cola",
    image: "https://www.instacart.com/assets/domains/product-image/file/large_8cf0b30c-a86b-4465-be1b-3272d089006a.jpg",
    description: "750ml chilled soft drink.",
    category: "beverages",
    price: 45,
    stock: 80
  },
  {
    name: "Potato Chips",
    image: "https://www.kroger.com/product/images/xlarge/front/0002840009085",
    description: "Crispy salted potato chips.",
    category: "snacks",
    price: 30,
    stock: 120
  },
  {
    name: "Detergent Powder",
    image: "https://m.media-amazon.com/images/I/619HRPW3elL._AC_UF1000,1000_QL80_.jpg",
    description: "1kg washing detergent powder.",
    category: "household",
    price: 150,
    stock: 40
  },
  {
    name: "Banana",
    image: "https://mana.md/wp-content/uploads/2021/11/banana-1025109_1280.jpg",
    description: "Fresh ripe bananas (1 dozen).",
    category: "fruits",
    price: 70,
    stock: 60
  },
  {
    name: "Cheese Slice",
    image: "https://modernfoodspune.com/wp-content/uploads/2023/05/amul-chees-450x450.jpg",
    description: "Processed cheese slices pack.",
    category: "dairy",
    price: 110,
    stock: 35
  },
  {
    name: "Orange Juice",
    image: "https://rita.com.vn/images/2024/Products/Fruit-juice/Orange-pulp/1L_pet_bottle_Orange_juice_with_Pulp_Drink_Natural.webp",
    description: "1 litre fresh orange juice.",
    category: "beverages",
    price: 90,
    stock: 75
  },
  {
    name: "Biscuits",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/cookie-biscuit/3/9/3/-original-imahjpe2sqnjh89z.jpeg?q=90",
    description: "Cream biscuits family pack.",
    category: "snacks",
    price: 25,
    stock: 200
  },
  {
    name: "Floor Cleaner",
    image: "https://wellify.in/cdn/shop/products/Floor_Cleaner_Pack2-1_1_697b3594-ff72-4acf-b4b1-a78a3b5661f6.jpg?v=1695972679",
    description: "500ml disinfectant floor cleaner.",
    category: "household",
    price: 95,
    stock: 55
  }
];


const productFormContainer = document.querySelector('.productForm-container')
const form = document.querySelector('#productForm')
const productSection = document.querySelector('.product-section')
const close = document.querySelector('#close')
const createBtn = document.querySelector('#createBtn')
const removeBtns = document.querySelectorAll('.removeBtn')

createBtn.addEventListener('click', function () {
  productFormContainer.style.left = '50%'

})

close.addEventListener('click', function () {
  productFormContainer.style.left = '102%'
})

function createProduct() {
  let sum = ""
  productList.forEach((elem, idx) => {
    sum += `<div class="product">
        <img
          src=${elem.image}
          alt="product-img">
        <div class="product-des">
          <h1>${elem.name}</h1>
          <p>${elem.description}</p>
          <h3>${elem.category}</h3>
          <div class="price">
            <h5>price: ${elem.price}</h5>
            <h5>stock: ${elem.stock}</h5>
          </div>
          <div class="btn">
            <button class="updateBtn">Update</button>
            <button data-index=${idx} class="removeBtn">Remove</button>
          </div>
        </div>
      </div>`

  })

  productSection.innerHTML = sum
}

createProduct()


form.addEventListener('submit', function (e) {
  e.preventDefault()
  const product = {
    name: form.name.value,
    image: form.image.value,
    description: form.description.value,
    category: form.category.value,
    price: form.price.value,
    stock: form.stock.value
  };

  productList.push(product)

  localStorage.setItem("products", JSON.stringify(productList))
  createProduct()
  form.reset()

})

productSection.addEventListener('click', function (e) {
  if (e.target.classList.contains("removeBtn")) {
    const index = e.target.getAttribute("data-index")

    
  }

})