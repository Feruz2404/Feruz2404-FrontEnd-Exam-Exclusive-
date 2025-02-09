import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/index';
import { fetchUserData, updateUserData, logout } from '../../redux/features/user-slice';
import { FormData } from '../../types';

const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { firstName, lastName, email, address, isLoggedIn, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth/login');
    } else {
      dispatch(fetchUserData());
    }
  }, [isLoggedIn, dispatch, navigate]);

  useEffect(() => {
    setFormData({ firstName, lastName, email, address, currentPassword: '', newPassword: '', confirmPassword: '' });
  }, [firstName, lastName, email, address]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(updateUserData(formData));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');  // Tokenni localStorage dan o'chirish
    dispatch(logout());
    navigate('/');
  };

  const renderInput = (label: string, name: keyof FormData, type: string = 'text', placeholder?: string) => (
    <div>
      {label && <label className="block mb-2">{label}</label>}
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-3 rounded bg-gray-100"
      />
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-[100vh] flex flex-col">
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="text-gray-500">/</span>
        <span>My Account</span>
        <div className="ml-auto">
          Welcome! <span className="text-red-500">{firstName} {lastName}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-grow">
        <div className="md:w-1/4">
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg mb-4">Manage My Account</h2>
              <ul className="space-y-3 pl-4">
                <li className="text-red-500 cursor-pointer">My Profile</li>
                <li className="text-gray-500 cursor-pointer hover:text-red-500 transition-colors">Address Book</li>
                <li className="text-gray-500 cursor-pointer hover:text-red-500 transition-colors">My Payment Options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:w-3/4 h-full">
          <h2 className="text-2xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-6">
                {renderInput('First Name', 'firstName')}
                {renderInput('Last Name', 'lastName')}
                {renderInput('Email', 'email', 'email')}
                {renderInput('Address', 'address')}
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Password Changes</h3>
                {renderInput('', 'currentPassword', 'password', 'Current Password')}
                {renderInput('', 'newPassword', 'password', 'New Password')}
                {renderInput('', 'confirmPassword', 'password', 'Confirm New Password')}
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                >
                  Logout
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
