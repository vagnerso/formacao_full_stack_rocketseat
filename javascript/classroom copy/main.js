// fetch("http://localhost:3000/products").then((response) => response.json()).then((data) => console.log(data))

//  usando fetch com async/await

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data)
}

fetchProducts()


