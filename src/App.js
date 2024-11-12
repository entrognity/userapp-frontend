// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { AlertProvider } from './contexts/AlertContext';
import { CartProvider } from './contexts/CartContext';
import GlobalAlert from './components/GlobalAlert';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookServicePage from './pages/BookServicePage';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import OrdersPage from './pages/OrdersPage';
import HelplinePage from './pages/HelplinePage';
import { EditProvider } from './contexts/EditContext';



const App = () => {
  return (
    <EditProvider>
      <CartProvider>
        <AlertProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/book" element={<BookServicePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/helpline" element={<HelplinePage />} />
              </Routes>
            </Layout>
          </Router>
          <GlobalAlert />
        </AlertProvider>
      </CartProvider>
    </EditProvider>
  );
};

export default App;




// // App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import HomePage from './pages/HomePage';
// import BookServicePage from './pages/BookServicePage';
// import CartPage from './pages/CartPage';
// import AccountPage from './pages/AccountPage';
// import OrdersPage from './pages/OrdersPage';
// import HelplinePage from './pages/HelplinePage';


// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/book" element={<BookServicePage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/account" element={<AccountPage />} />
//           <Route path="/orders" element={<OrdersPage />} />
//           <Route path="/helpline" element={<HelplinePage />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;