// HomePage.jsx
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="p-4 mt-16">
        <h2 className="text-xl font-semibold mb-4">Welcome to PinPaper</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium mb-2">Quick Print</h3>
            <p className="text-sm text-gray-600">Start a new print order now</p>
            <button 
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => navigate('/book')}
            >
              Book Service
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Recent Orders</h3>
            <p className="text-sm text-gray-600">View your order history</p>
          </div>
        </div>
      </div>
    );
  };

export default HomePage;