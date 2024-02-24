const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalBill = 0;

    for (let item of shoppingList) {
        
        if (item in stock && stock[item] > 0) {
            
            let itemPrice = prices[item];
            
            totalBill += itemPrice;

            stock[item] -= 1;
        } else {
            console.log(`Sorry, ${item} is out of stock.`);
        }
    }

    return totalBill;
}

const total = myBill();
console.log(`Total Bill: $${total.toFixed(2)}`);
console.log("Updated Stock:", stock);
