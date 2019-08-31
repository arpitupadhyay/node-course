

// create objects file

const name = 'arpit'
const age = '19'

const user = {
    name: name,
    age: age,
    location: 'india'
}
console.log(user)

// cost product

const product = {
    label: 'red notebook',
    price: '2$',
    stock: '201',
    saleprice: undefined,
    rating: 4.2
}

// const label = product.label
// const price = product.price

// const {label: productLabel,stock,rating=5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0 } = {} ) => {
    console.log(type,label,stock)
}

transaction('order', product)