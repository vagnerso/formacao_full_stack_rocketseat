// filter

const words = ["Javascript", "HTML", "CSS", "web"]

const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true},
    { description: "Mouse", price: 70, promotion: false},
    { description: "Monitor", price: 900, promotion: true},
]

// exemplo de filtro de produtos na promoção
const promotion = products.filter((product)=> product.promotion === true)
console.log(promotion)