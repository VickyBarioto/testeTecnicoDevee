const productsInCart = [
  {
    id: 1,
    name: "Product 1", // Nome do produto
    price: 100.0, // Preço do produto
    quantity: 3, // Quantidade do produto
    freight: 10.0, // Custo de frete
  },
  {
    id: 2,
    name: "Product 2",
    price: 200.0,
    quantity: 2,
    freight: 20.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300.0,
    quantity: 1,
    freight: 30.0,
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-Br",{style: "currency", currency: "BRL"}).format(value)
};

const initialValue = 0;

const totalItemsQuantity = productsInCart.reduce((previousValue,product) => previousValue + product.quantity,initialValue);
const itemsSubtotal = productsInCart.reduce((previousValue,product) => previousValue + (product.price * product.quantity),initialValue);
const totalFreight = productsInCart.reduce((previousValue, product) => Math.max(previousValue,product.freight),initialValue);
const totalValue = itemsSubtotal + totalFreight;

const itemsSubtotalHtml = document.getElementById("cart-subtotal-value");
const totalFreightHtml = document.getElementById("cart-freight-value");
const totalValueHtml = document.getElementById("cart-total-value");
const totalItemsQuantityHtml = document.getElementById("cart-quantity-value");

totalItemsQuantityHtml.innerText = totalItemsQuantity;
itemsSubtotalHtml.innerText = formatCurrency(itemsSubtotal);
totalFreightHtml.innerText = formatCurrency(totalFreight);
totalValueHtml.innerText = formatCurrency(totalValue);