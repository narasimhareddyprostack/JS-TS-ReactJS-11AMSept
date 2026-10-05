let state={
    uid:101,
    unames:[],
    product:{
        pid:101,
        pname:"MI TV",
        price:28000
    }
}

console.log(state.product.pid);

let {product} = state;
let {pid} = product;
console.log(pid) 