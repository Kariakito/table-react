import { useState } from 'react';

const initialProductList = [
  { id: 1, name: 'product 1' , price: 50, quantity: 1 },
  { id: 2, name: 'product 2', price: 75, quantity: 2 },
  { id: 3, name: 'product 3', price: 20, quantity: 5 }
];

//console.log(initialProductList);



function App() {
  const [products, setProducts] = useState (initialProductList);

  function calculateTotalPrice () {
    let totalPrice = 0;

    products.forEach((item) => {
       totalPrice = totalPrice + item.price *item.quantity;

    });

    return totalPrice;
  }

  function renderProducts () {
    return products.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>{item.price * item.quantity}</td>
        </tr>
      );
    });
    }

  return (
    <div>
      <h1>Orders Table</h1>

        <table>

          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty </th>
            <th> Item Total price and qty</th>
          </tr>

          </thead>
          

            <tbody>
             {renderProducts()}
            </tbody>
          
        </table>

        <h4>total price of all the product in table= xxxx</h4>


        <h3>Add Item</h3>

        <label thmlFor="">Product</label>
        <input type="text" />


        <label thmlFor="">Price</label>
        <input type="text" />

        <button>Enter Product</button>

    </div>
  );
}

export default App;
