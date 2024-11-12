import React from 'react';
import { useNavigate } from 'react-router-dom';


const ServicesPage = () => {
  // const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    // setSelectedService(service);
    navigate(`/services/book?serviceID=${service.id}`);
  };

  // Define services after the necessary functions are declared
  const services = [
    { id: 1, name: 'Spiral Binding', price: 15 },
    { id: 2, name: 'Thermal Binding', price: 20 },
    // Define other services with their corresponding component
  ];

  const renderServiceSelection = () => (
    <div className="p-4 mt-16">
      <h2 className="text-xl font-semibold mb-4">Select a Service</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleServiceSelect(service)}
          >
            <h3 className="font-medium">{service.name}</h3>
            <p className="text-sm text-gray-600">${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );



  return renderServiceSelection();
};

export default ServicesPage;