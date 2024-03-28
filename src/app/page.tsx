'use client'
import Razorpay from 'razorpay';
import React, { useState } from 'react';

function ProductForm() {

  const makePayment = ()=>{
    // "use server";
    const instance = new Razorpay({ key_id: process.env.key_id!, key_secret: process.env.key_secret! });
    instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
        key1: "value3",
        key2: "value2"
    }
  });


  }







  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [phone, setPhone] = useState('');
  const [productId, setProductId] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', { name, price, phone, productId });
    makePayment();

    
    setName('');
    setPrice(0);
    setPhone('');
    setProductId('');
  };

  return (
    <div className='m-12'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <div><input
        className='border-2 border-black rounded-lg'
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /></div>
      

      <label htmlFor="price">Price:</label>
      <div><input
                className='border-2 border-black rounded-lg'

        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      /></div>
      

      <label htmlFor="phone">Phone Number:</label>
      <div>
        <input
                className='border-2 border-black rounded-lg'

        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      </div>
      

      <label htmlFor="productId">Product ID:</label>
      <div><input
                className='border-2 border-black rounded-lg'

        type="text"
        id="productId"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        required
      /></div>
      

      <button className='border border-black bg-blue-300 rounded-md mt-5' type="submit">Submit</button>
    </form>
    </div>
  );
}

export default ProductForm;
