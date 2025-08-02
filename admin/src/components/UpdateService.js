import React, { useState, useEffect } from 'react';
import { Pencil, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';
import Navbar from './Navbar';
import Swal from 'sweetalert2';
import './UpdateService.css';

const UpdateService = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [expandedCar, setExpandedCar] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/cars');
      setCars(response.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError('Failed to fetch cars: ' + (err.response?.data?.message || err.message));
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/cars/${id}`);
          setCars(cars.filter((car) => car._id !== id));
          Swal.fire('Deleted!', 'The car has been deleted.', 'success');
        } catch (err) {
          const errorMessage = err.response?.data?.message || err.message;
          Swal.fire('Error!', `Failed to delete car: ${errorMessage}`, 'error');
        }
      }
    });
  };

  const toggleExpand = (carId) => {
    setExpandedCar(expandedCar === carId ? null : carId);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getImageUrl = (photoPath) => {
    if (!photoPath) return null;
    if (photoPath.startsWith('http')) return photoPath;
    const normalizedPath = photoPath.replace(/\\/g, '/');
    const cleanPath = normalizedPath.replace(/^(?:uploads\/)?/, '').replace(/^\/+/, '');
    return `http://localhost:5000/uploads/${cleanPath}`;
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">View & Update</h1>
          <div className="text-sm text-gray-600">
            Total Cars: {cars.length}
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {deleteError && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {deleteError}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {cars.map((car) => (
                <React.Fragment key={car._id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{car.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{car.model}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{car.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{car.registration}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {formatPrice(car.price)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {Object.entries(car)
                        .filter(([key, value]) => key.startsWith('photo') && value)
                        .length > 0 ? (
                        <button
                          onClick={() => toggleExpand(car._id)}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          {expandedCar === car._id ? (
                            <><ChevronUp className="w-4 h-4 mr-1" /> Hide Photos</>
                          ) : (
                            <><ChevronDown className="w-4 h-4 mr-1" /> View Photos</>
                          )}
                        </button>
                      ) : (
                        <span className="text-gray-400">No photos</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => window.location.href = `/edit-car/${car._id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(car._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedCar === car._id && (
                    <tr>
                      <td colSpan="7" className="px-6 py-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                          {['photo1', 'photo2', 'photo3', 'photo4', 'photo5'].map((photoKey, index) => {
                            if (!car[photoKey]) return null;

                            const imageUrl = getImageUrl(car[photoKey]);
                            return imageUrl ? (
                              <div key={photoKey} className="relative aspect-w-3 aspect-h-2">
                                <img
                                  src={imageUrl}
                                  alt={`Car ${index + 1}`}
                                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                                  onError={(e) => {
                                    e.target.src = '/placeholder-car.jpg';
                                  }}
                                />
                              </div>
                            ) : null;
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
