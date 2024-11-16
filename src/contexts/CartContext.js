// src/context/CartContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log('cartitems: ', cartItems);
  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.articleAmount || 0, 0) : 0;

  const fetchCartItems = useCallback(async () => {
    try {
      // const response = await axios.get(`${process.env.REACT_APP_HOSTURL}/api/v1/cart/getCartItems?userID=7993924730`);
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/cart/getCartItems?userID=7993924730`);
      console.log(response.data);
      let cartData = response.data.data;
      cartData = cartData.map((item) => {
        return {
          ...item,
          files: item.filesDetails || [], // Copy filesDetails and add tp 'files' property
        };
      });
      console.log('cartData: ', cartData);
      setCartItems(cartData);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  }, []);

  const removeItemFromCart = async (itemId) => {
    try {
      // handle response fpr delete 
      await axios.delete(`${process.env.REACT_APP_BASEURL}/api/v1/cart/deleteCartItem?userID=7993924730&articleID=${itemId}`);

      setCartItems((prevItems) => prevItems.filter((item) => item.articleID !== itemId));
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  // Populate with dummy data
  // const fetchCartItems = useCallback(() => {
  //   const dummyData = [
  //     {
  //       id: 1, serviceID: 1, name: "Spiral Binding", files: [
  //         {
  //           cid: "bafkreiche3ltll5twxd2qkmda6vcjo576svjtsy4jxxgd37ilbi3s336ra",
  //           name: "Acknowledgement_Slip.pdf",
  //           noOfPages: 1,
  //           size: 10754,
  //           type: "application/pdf"
  //         },
  //         {
  //           cid: "bafkreiche3ltll5twxd2qkmda6vcjo57654789f4jxxgd37ilbi3s336ra",
  //           name: "file2.pdf",
  //           noOfPages: 1,
  //           size: 10754,
  //           type: "application/pdf"
  //         }
  //       ],
  //       noOfPages: 10, printColor: "BW", printSides: "singleSide", outerCoverColor: "white", note: "", noOfCopies: 2, filesUri: ["bafybeig2ycbymbepocwe33kfvjrlmn757kuupitbvfjiilo62zaq4qb2me"], price: 1200.00
  //     },
  //     {
  //       id: 2, serviceID: 2, name: "Thermal Binding", files: [
  //         {
  //           cid: "bafkreiche3ltll5twxd2qkmda6vcjo576svjtsy4jxxgd37ilbi3s336ra",
  //           name: "Acknowledgement_Slip.pdf",
  //           noOfPages: 1,
  //           size: 10754,
  //           type: "application/pdf"
  //         }
  //       ], fileName: "file2.pdf", noOfPages: 10, printColor: "Color", noOfCopies: 2, price: 500.00
  //     },
  //     {
  //       id: 3, serviceID: 3, name: "Project / Thesis Binding", files: [
  //         {
  //           cid: "bafkreiche3ltll5twxd2qkmda6vcjo576svjtsy4jxxgd37ilbi3s336ra",
  //           name: "Acknowledgement_Slip.pdf",
  //           noOfPages: 1,
  //           size: 10754,
  //           type: "application/pdf"
  //         }
  //       ], fileName: "file3.pdf", noOfPages: 10, printColor: "BWandColorMix", noOfCopies: 2, price: 300.00
  //     },
  //   ];
  //   setCartItems(dummyData);
  // }, []);

  // const removeItemFromCart = (itemId) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  // };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, totalPrice, fetchCartItems, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
