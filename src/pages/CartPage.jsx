// // src/pages/CartPage.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import { useEdit } from '../contexts/EditContext';
// import { FileText, Trash2 } from 'lucide-react';


// const CartPage = () => {
//   const { cartItems, totalPrice, fetchCartItems, removeItemFromCart } = useCart();
//   const [selectedItem, setSelectedItem] = useState(null);
//   const { setEditItem } = useEdit();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCartItems();
//   }, [fetchCartItems]);

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     // navigate(`/services/book?serviceID=${item.serviceID}`, { state: { itemData: item } });
//     setEditItem(item);
//     navigate(`/services/book?serviceID=${item.serviceID}&mode=edit`);
//   };

//   return (
//     <div className="mt-16 p-4">
//       <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
//               onClick={() => handleItemClick(item)}
//             >
//               <FileText className="w-7 h-7 text-blue-600 mr-3" />
//               <div className="flex-grow text-left">
//                 <p className="text-lg font-medium text-gray-900">{item.name}</p>
//                 <p className="text-gray-700">File: {item.fileName}</p>
//                 <p className="text-gray-700">Pages: {item.noOfPages}</p>
//                 <p className="text-gray-700">Print Color: {item.printColor}</p>
//                 <p className="text-gray-700">Copies: {item.noOfCopies}</p>
//                 <p className="text-left text-gray-900">Price: ₹{item.price.toFixed(2)}</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => removeItemFromCart(item.id)}
//                 className="text-red-600 hover:text-red-800 ml-3"
//               >
//                 <Trash2 className="w-6 h-6" />
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-gray-600">Your cart is empty.</div>
//         // <div className="text-gray-500 py-16">
//         //   <p className="text-lg">Your cart is empty.</p>
//         //   <p className="text-sm mt-2">Browse items and add them to your cart to see them here!</p>
//         // </div>
//       )}


//       {cartItems.length > 0 && (
//         <div className="mt-8 border-t-2 border-gray-200 pt-4">
//           <div className="flex-col items-end">
//             <div className="flex justify-between text-xl font-semibold text-gray-800">
//               <p>Total:&nbsp;</p>
//               <p>₹{totalPrice.toFixed(2)}</p>
//             </div>
//             <p className="text-left text-xs">
//               * Delivery charges might be added as per your choice
//             </p>
//           </div>
//           <div className="mt-4 flex justify-center">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;




// src/pages/CartPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useEdit } from '../contexts/EditContext';
import { FileText, Trash2, FilePenLine } from 'lucide-react';

const CartPage = () => {
  const { cartItems, totalPrice, fetchCartItems, removeItemFromCart } = useCart();
  // const [selectedItem, setSelectedItem] = useState(null);
  const { setEditItem } = useEdit();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const handleEditItemClick = (item) => {
    // setSelectedItem(item);
    setEditItem(item);
    navigate(`/services/book?serviceID=${item.serviceID}&mode=edit`);
  };

  return (
    <div className="mt-16 p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-md bg-white"
            >
              <div className="flex p-4">
                {/* Left Section: File Symbol */}
                <div className="flex items-center mr-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>

                {/* Middle Section: File Details */}
                <div className="flex-grow">
                  {/* Service Name */}
                  <p className="text-lg font-medium text-gray-900">{item.name}</p>

                  {/* File Details */}
                  <p className="text-gray-700">
                    File(s): {item.files.map((file, index) => (
                      <span key={index}>{file.name}</span>
                    )).reduce((prev, curr) => [prev, <span className='text-blue-600 font-semibold'> | </span>, curr])}
                  </p>

                  {/* Other Details */}
                  <p className="text-gray-700">Pages: {item.noOfPages}</p>
                  <p className="text-gray-700">Print Color: {item.printColor}</p>
                  <p className="text-gray-700">Copies: {item.noOfCopies}</p>
                  <p className="text-left text-gray-900">Price: ₹{item.articleAmount.toFixed(2)}</p>
                </div>
              </div>

              {/* Bottom Section: Edit and Delete buttons */}
              <div className="flex border-t-2 border-gray-300 divide-x-2 divide-gray-300">
                <button
                  type="button"
                  onClick={() => handleEditItemClick(item)}
                  className="w-1/2 p-3 text-blue-600 hover:text-blue-800 flex justify-center items-center"
                >
                  <FilePenLine className="w-6 h-6 mr-1" />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => removeItemFromCart(item.id)}
                  className="w-1/2 p-3 text-red-600 hover:text-red-800 flex justify-center items-center"
                >
                  <Trash2 className="w-6 h-6 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-600">Your cart is empty.</div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 border-t-2 border-gray-200 pt-4">
          <div className="flex-col items-end">
            <div className="flex justify-between text-xl font-semibold text-gray-800">
              <p>Total:&nbsp;</p>
              <p>₹{totalPrice.toFixed(2)}</p>
            </div>
            <p className="text-left text-xs">
              * Delivery charges might be added as per your choice
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
