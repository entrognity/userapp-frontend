// AccountPage.jsx
const AccountPage = () => {
    return (
      <div className="p-4 mt-16">
        <h2 className="text-xl font-semibold mb-4">My Account</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-2">Profile Information</h3>
            <p className="text-sm text-gray-600">Manage your account details</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium mb-2">Address Book</h3>
            <p className="text-sm text-gray-600">Manage your delivery addresses</p>
          </div>
        </div>
      </div>
    );
  };

export default AccountPage;