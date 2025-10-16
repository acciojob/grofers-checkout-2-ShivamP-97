//your code here
const priceElements = document.querySelectorAll('[data-ns-test="price"]');

let total = 0;

priceElements.forEach((priceElement) => {
    const price = parseInt(priceElement.textContent);
    if (!isNaN(price)) {
        total += price;
    }
});

const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

totalCell.setAttribute("colspan", "2");
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.textContent = total.toString();

totalRow.appendChild(totalCell);
table.appendChild(totalRow);