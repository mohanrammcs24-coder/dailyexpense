let totalAmount = 0;

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;
    let category = document.getElementById("expenseCategory").value;

    if (name === "" || amount === "") {
        alert("Please enter expense name and amount");
        return;
    }

    amount = parseInt(amount);

    let li = document.createElement("li");
    li.innerText = name + " (" + category + ") - ₹" + amount;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        totalAmount -= amount;
        document.getElementById("total").innerText = totalAmount;
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("expenseList").appendChild(li);

    totalAmount += amount;
    document.getElementById("total").innerText = totalAmount;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}
