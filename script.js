//your code here
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

let total = 0;

priceElements.forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
        total += price;
    }
});

const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

totalCell.setAttribute("colspan", "2");
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.textContent = `Total: ${total.toFixed(2)}`;

totalRow.appendChild(totalCell);
table.appendChild(totalRow);