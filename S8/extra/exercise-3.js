async function fechData() {
  const orders = await (await fetch("http://localhost:3000/orders")).json();
  console.log("Datos de los pedidos:", orders);

  const products = await (await fetch("http://localhost:3000/products")).json();
  console.log("Datos de los productos:", products);

  const ordersContainer = document.getElementById("orders-container");

  orders.sort((a, b) => new Date(b.date) - new Date(a.date));

  orders.forEach((order) => {
    const orderElement = document.createElement("div");
    orderElement.innerHTML = `
                <h2>Pedido #${order.id}</h2>
                <p>Fecha: ${order.date}</p>
                <ul>
                    ${order.products
                      .map((product) => {
                        console.log(
                          "ID del producto en el pedido:",
                          product.productId
                        );
                        const foundProduct = products.find(
                          (p) => p.id === product.productId
                        );
                        console.log(
                          "ID del producto en la lista de productos:",
                          foundProduct ? foundProduct.id : "No encontrado"
                        );
                        if (foundProduct) {
                          return `<li>${foundProduct.name} - Cantidad: ${product.quantity}</li>`;
                        } else {
                          return `<li>Producto no encontrado - Cantidad: ${product.quantity}</li>`;
                        }
                      })
                      .join("")}
                </ul>
            `;
    ordersContainer.appendChild(orderElement);
  });
}

fechData();
