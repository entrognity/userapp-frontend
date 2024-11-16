// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext';
// import { useAlert } from '../contexts/AlertContext';

// const DeliveryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { showAlert } = useAlert();
//   const { user, fetchUserAddress } = useUser(); // Fetch user and address context

//   const { cartItems = [], totalPrice: initialTotalPrice = 0 } = location.state || {};
//   const [address, setAddress] = useState(null);
//   const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
//   const [deliveryOptions] = useState([
//     { label: 'Standard Delivery', priceModifier: 0, description: '3-5 business days' },
//     { label: 'Express Delivery', priceModifier: 50, description: '1-2 business days' },
//     { label: 'Overnight Delivery', priceModifier: 100, description: 'Next business day' },
//   ]);
//   const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

//   // Fetch user address on component mount
//   useEffect(() => {
//     const fetchAddress = async () => {
//       const userAddress = await fetchUserAddress();
//       console.log('in del p:', userAddress);
//       const formattedAddress = `${userAddress.userMobNumber}, ${userAddress.userStreet}, ${userAddress.userLandmark}
//       ${userAddress.userCity}, ${userAddress.userState}, ${userAddress.userPincode}`;
//       setAddress(formattedAddress);
//     };
//     fetchAddress();
//   }, [fetchUserAddress]);

//   // Update total price when a delivery option is selected
//   useEffect(() => {
//     if (selectedDeliveryOption) {
//       setTotalPrice(initialTotalPrice + selectedDeliveryOption.priceModifier);
//     }
//   }, [selectedDeliveryOption, initialTotalPrice]);

//   // Redirect back to cart if cart items are missing
//   // useEffect(() => {
//   //   if (!cartItems.length) {
//   //     navigate('/cart');
//   //   }
//   // }, [cartItems, navigate]);

//   // Add Address Handler
//   const handleAddAddress = async () => {
//     navigate('/account/address', { state: { returnTo: '/delivery' } }); // Optionally pass return location
//   };

//   // Delivery Option Selection Handler
//   const handleDeliveryOptionChange = (option) => {
//     setSelectedDeliveryOption(option);
//   };

//   // Proceed to Payment
//   const handleMakePayment = () => {
//     if (!address) {
//       showAlert("Please add an address before proceeding to payment.", "error");
//       return;
//     }

//     navigate('/payment', {
//       state: { cartItems, totalPrice, selectedDeliveryOption },
//     });
//   };

//   return (
//     <div className="mt-16 p-4">
//       <h2 className="text-xl font-semibold mb-4">Delivery and Address Selection</h2>
      
//       {/* Address Section */}
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-800 mb-2">Your Address</h3>
//         {address ? (
//           <p className="text-gray-700 bg-gray-100 p-3 rounded">{address}</p>
//         ) : (
//           <div className="text-gray-600">
//             No address found. <button onClick={handleAddAddress} className="text-blue-600 hover:text-blue-800 underline">Add Address</button>
//           </div>
//         )}
//       </div>

//       {/* Cart Summary */}
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-800">Cart Summary</h3>
//         {cartItems.map((item) => (
//           <div key={item.id} className="text-gray-700 p-2 border-b">
//             <p className="text-gray-700">
//                     {item.files.map((file, index) => (
//                       <span key={index}>{file.name}</span>
//                     )).reduce((prev, curr) => [prev, <span className='text-blue-600 font-semibold'> <br/> </span>, curr])}
//                     - {item.noOfCopies} x ₹{item.articleAmount.toFixed(2)}
//             </p>
//             {/* <p>{item.name} - {item.quantity} x ₹{item.price.toFixed(2)}</p> */}
//           </div>
//         ))}
//       </div>

//       {/* Delivery Options */}
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-800 mb-2">Select Delivery Option</h3>
//         <div className="space-y-4">
//           {deliveryOptions.map((option, index) => (
//             <div 
//               key={index} 
//               className={`p-4 border rounded-lg cursor-pointer ${selectedDeliveryOption?.label === option.label ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
//               onClick={() => handleDeliveryOptionChange(option)}
//             >
//               <p className="font-medium text-gray-900">{option.label}</p>
//               <p className="text-sm text-gray-700">{option.description}</p>
//               <p className="text-sm text-gray-800">+ ₹{option.priceModifier.toFixed(2)}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Total Price and Make Payment */}
//       <div className="mt-8 border-t-2 border-gray-200 pt-4">
//         <div className="flex justify-between text-xl font-semibold text-gray-800 mb-4">
//           <p>Total:</p>
//           <p>₹{totalPrice.toFixed(2)}</p>
//         </div>
//         <button 
//           onClick={handleMakePayment}
//           className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150"
//         >
//           Make Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPage;





// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext';
// import { useAlert } from '../contexts/AlertContext';

// const DeliveryPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { showAlert } = useAlert();
//   const { user, fetchUserAddress } = useUser();

//   const { cartItems = [], totalPrice: initialTotalPrice = 0 } = location.state || {};
//   const [address, setAddress] = useState(null);
//   const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
//   const [deliveryOptions] = useState([
//     { label: 'Standard Delivery', priceModifier: 0, description: '3-5 business days' },
//     { label: 'Express Delivery', priceModifier: 50, description: '1-2 business days' },
//     { label: 'Overnight Delivery', priceModifier: 100, description: 'Next business day' },
//   ]);
//   const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

//   useEffect(() => {
//     const fetchAddress = async () => {
//       const userAddress = await fetchUserAddress();
//       const formattedAddress = `${userAddress.userMobNumber}, ${userAddress.userStreet}, ${userAddress.userLandmark}, ${userAddress.userCity}, ${userAddress.userState}, ${userAddress.userPincode}`;
//       setAddress(formattedAddress);
//     };
//     fetchAddress();
//   }, [fetchUserAddress]);

//   useEffect(() => {
//     if (selectedDeliveryOption) {
//       setTotalPrice(initialTotalPrice + selectedDeliveryOption.priceModifier);
//     }
//   }, [selectedDeliveryOption, initialTotalPrice]);

//   const handleAddAddress = () => {
//     navigate('/account/address', { state: { returnTo: '/delivery' } });
//   };

//   const handleDeliveryOptionChange = (option) => {
//     setSelectedDeliveryOption(option);
//   };

//   const handleMakePayment = () => {
//     if (!address) {
//       showAlert("Please add an address before proceeding to payment.", "error");
//       return;
//     }

//     navigate('/payment', {
//       state: { cartItems, totalPrice, selectedDeliveryOption },
//     });
//   };

//   return (
//     <div className="mt-10 p-4 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//         Delivery and Address Selection
//       </h2>

//       {/* Address Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Address</h3>
//         {address ? (
//           <p className="text-gray-700 bg-white p-4 rounded-lg shadow-md">{address}</p>
//         ) : (
//           <div className="text-gray-600">
//             No address found.{' '}
//             <button
//               onClick={handleAddAddress}
//               className="text-blue-600 font-semibold hover:text-blue-800 underline"
//             >
//               Add Address
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Cart Summary */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Cart Summary</h3>
//         <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
//           {cartItems.map((item) => (
//             <div key={item.id} className="border-b last:border-none pb-2">
//               <p className="text-gray-800">
//                 {item.files
//                   .map((file, index) => <span key={index}>{file.name}</span>)
//                   .reduce((prev, curr) => [prev, <br />, curr])}
//                 - {item.noOfCopies} x ₹{item.articleAmount.toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Delivery Options */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Delivery Option</h3>
//         <div className="space-y-4">
//           {deliveryOptions.map((option, index) => (
//             <div
//               key={index}
//               className={`p-4 border rounded-lg cursor-pointer shadow-md transition ${
//                 selectedDeliveryOption?.label === option.label
//                   ? 'border-blue-600 bg-blue-50'
//                   : 'border-gray-300 hover:shadow-lg'
//               }`}
//               onClick={() => handleDeliveryOptionChange(option)}
//             >
//               <p className="font-medium text-gray-900">{option.label}</p>
//               <p className="text-sm text-gray-600">{option.description}</p>
//               <p className="text-sm text-gray-800">+ ₹{option.priceModifier.toFixed(2)}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Total Price and Make Payment */}
//       <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
//         <div className="flex justify-between items-center text-xl font-semibold text-gray-800 mb-4">
//           <span>Total:</span>
//           <span>₹{totalPrice.toFixed(2)}</span>
//         </div>
//         <button
//           onClick={handleMakePayment}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-150"
//         >
//           Make Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPage;





import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAlert } from '../contexts/AlertContext';

const DeliveryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { user, fetchUserAddress } = useUser();

  const { cartItems = [], totalPrice: initialTotalPrice = 0 } = location.state || {};
  const [address, setAddress] = useState(null);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null);
  const [deliveryOptions] = useState([
    { label: 'Standard Delivery', priceModifier: 0, description: '3-5 business days' },
    { label: 'Express Delivery', priceModifier: 50, description: '1-2 business days' },
    { label: 'Overnight Delivery', priceModifier: 100, description: 'Next business day' },
  ]);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  useEffect(() => {
    const fetchAddress = async () => {
      const userAddress = await fetchUserAddress();
      const formattedAddress = `${userAddress.userMobNumber}, ${userAddress.userStreet}, ${userAddress.userLandmark}, ${userAddress.userCity}, ${userAddress.userState}, ${userAddress.userPincode}`;
      setAddress(formattedAddress);
    };
    fetchAddress();
  }, [fetchUserAddress]);

  useEffect(() => {
    if (selectedDeliveryOption) {
      setTotalPrice(initialTotalPrice + selectedDeliveryOption.priceModifier);
    }
  }, [selectedDeliveryOption, initialTotalPrice]);

  const handleAddAddress = () => {
    navigate('/account/address', { state: { returnTo: '/delivery' } });
  };

  const handleDeliveryOptionChange = (option) => {
    setSelectedDeliveryOption(option);
  };

  const handleMakePayment = () => {
    if (!address) {
      showAlert("Please add an address before proceeding to payment.", "error");
      return;
    }

    navigate('/payment', {
      state: { cartItems, totalPrice, selectedDeliveryOption },
    });
  };

  return (
    <div className="bg-white md:max-w-xl mx-auto mt-8 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Delivery and Address</h2>
      
      {/* Address Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Address</h3>
        {address ? (
          <p className="text-gray-700 bg-gray-100 p-4 rounded-md">{address}</p>
        ) : (
          <div className="text-gray-600">
            No address found. <button onClick={handleAddAddress} className="text-blue-600 hover:text-blue-800 underline font-medium">Add Address</button>
          </div>
        )}
      </div>

      {/* Cart Summary */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Cart Summary</h3>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100 rounded-md">
              <p className="text-gray-700">
                {item.files.map((file, index) => (
                  <span key={index}>{file.name}</span>
                )).reduce((prev, curr) => [prev, <span className='text-blue-600 font-semibold'> | </span>, curr])}
                - {item.noOfCopies} x ₹{item.articleAmount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Options */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Select Delivery Option</h3>
        <div className="space-y-4">
          {deliveryOptions.map((option, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-md cursor-pointer ${selectedDeliveryOption?.label === option.label ? 'bg-blue-50 border-2 border-blue-600' : 'bg-gray-100 border-2 border-transparent hover:bg-gray-200'}`}
              onClick={() => handleDeliveryOptionChange(option)}
            >
              <p className="font-semibold text-gray-900">{option.label}</p>
              <p className="text-sm text-gray-700">{option.description}</p>
              <p className="text-sm text-gray-800 font-medium">+ ₹{option.priceModifier.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price and Make Payment */}
      <div className="mt-8 border-t-2 border-gray-200 pt-4">
        <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
          <p>Total:</p>
          <p>₹{totalPrice.toFixed(2)}</p>
        </div>
        <button 
          onClick={handleMakePayment}
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-150"
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default DeliveryPage;