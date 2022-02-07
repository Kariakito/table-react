import { useState } from 'react';
import { uuid } from 'uuidv4';

const initialProductList = [
  { id: 1, name: 'product 1' , price: 50, quantity: 1 },
  { id: 2, name: 'product 2', price: 75, quantity: 2 },
  { id: 3, name: 'product 3', price: 20, quantity: 5 }
];

//console.log(initialProductList);



function App() {
  const [products, setProducts] = useState (initialProductList);
  const [newProductName, setNewProductName] = useState ('--type the name product here--');
  const [newProductPrice, setNewProductPrice] = useState (0);

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

  function addNewItem (){
   // console.log('working');

   const newProductInfo = {id: uuid() , name:'New product', price: 30, quantity:3};
   //console.log(newProductInfo);
   //products.push(newProductInfo);
   //console.log(products);

   setProducts ([...products, newProductInfo]);
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
            <th> Item Total </th>
          </tr>

          </thead>
          

            <tbody>
             {renderProducts()}
            </tbody>
          
        </table>

        <h4>total price of all the product in table= {calculateTotalPrice()}</h4>


        <h3>Add Item</h3>

        <label htmlFor="">Product Name</label>
        <input type="text" value={newProductName} onChange={(event) => {
          setNewProductName(event.target.value);
          
        }}/>


        <label htmlFor="">Price</label>
        <input type="text" value={newProductPrice} onChange={(event) => {
          setNewProductPrice(event.target.value);
          
        }}/>

        <button onClick={addNewItem}>Enter Product</button>

    </div>
  );
}

export default App;
