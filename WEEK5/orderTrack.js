function orderPlaced() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Order Placed");
            document.write("Order Placed<br>");
            resolve();
        }, 1000);
    });
}

function orderShipped() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Order Shipped");
            document.write("Order Shipped<br>");
            resolve();
        }, 1000);
    });
}

function orderDelivered() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Order Delivered");
            document.write("Order Delivered<br>");
            resolve();
        }, 1000);
    });
}

orderPlaced()
    .then(orderShipped)
    .then(orderDelivered);
