// JS Code here...
let products = [
    {
        id: 468,
        name: "Monitor",
        price: 100,
        iva: 21,
        date: "12/13/2022"
    },
    {
        id: 468,
        name: "Monitor",
        price: 100,
        iva: 21,
        date: "12/13/2022"
    }
];

const productTable = document.querySelector('#products-table');
const productForm =document.querySelector('#product-form');
const productName = document.querySelector('#product');
const productPrice = document.querySelector('#price');
const productIVA = document.querySelector('#iva');
const productBodyTable = productTable.querySelector('tbody');

window.onload = load();

function load (){
    productForm.addEventListener('submit', proccessForm);
}

function proccessForm(event) {
    event.preventDefault();

    let name = productName.value;
    let price = productPrice.value;
    let iva = productIVA.value;

    if(iva <= 0) {
        iva = 21;
    }

    if(name == "" || price == "") {
        alert("The price or the name are empty, please fill it");
    } else {
        let date = new Date();
        let day = date.getDate().toString().padStart(2,"0");
        let month = date.getMonth().toString().padStart(2,"0");
        let year = date.getFullYear();
        let id = generateID();
        price = parseFloat(price)

        let product = {
            name,
            price,
            iva,
            date: `${day}/${month}/${year}`,
            id
        }
        products.push(product);
        drawTable();
    }
}

function generateID () {
    let id = Math.round((Math.random() * 999) + 1);

    return id.toString().padStart(3, "0");
}

function drawTable() {
    productBodyTable.innerHTML = "";
    let mappedProducts = products.forEach( product => {
        let total = product.price * (1 + (product.iva / 100))
        let productRow = document.createElement("tr");
        let productColId = document.createElement("td");
        productColId.innerText = product.id;
        let productColName = document.createElement("td");
        productColName.innerText = product.name;
        let productColPrice = document.createElement("td");
        productColPrice.innerText = "$"+product.price.toFixed(2);
        let productColIva = document.createElement("td");
        productColIva.innerText = product.iva+"%";
        let productColTotal = document.createElement("td");
        productColTotal.innerText = "$"+total.toFixed(2);
        let productColDate = document.createElement("td");
        productColDate.innerText = product.date;

        productRow.append(productColId)
        productRow.append(productColName)
        productRow.append(productColPrice)
        productRow.append(productColIva)
        productRow.append(productColTotal)
        productRow.append(productColDate)
        productBodyTable.append(productRow)
    })
}