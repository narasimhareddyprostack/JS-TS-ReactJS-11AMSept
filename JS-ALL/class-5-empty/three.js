let user={}
let product={
    pid:101,
    pname:"Marker Pen",
    price:30
}
console.log(Object.keys(product))
console.log(Object.keys(product).length)
console.log(Object.keys(product).length>0)

if (Object.keys(product).length>0) {
        console.log("Not Empty Object")
} else {
        console.log("Empty Object")
}