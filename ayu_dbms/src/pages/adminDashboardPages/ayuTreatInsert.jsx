import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function AyuTreatInsert() {
  const [formData, setFormData] = useState({
    treatmentName: '',
    duration: '',
    disease: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Validate input
    if (!formData.treatmentName || !formData.duration || !formData.disease) {
      toast.error('Please fill in all fields.', {
        position: 'top-center',
      });
      return;
    }

    // Simulate successful submission
    toast.success('Ayurvedic treatment added successfully!', {
      position: 'top-center',
    });

    // Clear the form
    setFormData({ treatmentName: '', duration: '', disease: '' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow mt-0">
        {/* Sidebar */}
        <div className="bg-color-4 mt-20 w-1/4 p-8">
                 <h2 className="text-2xl text-white font-serif mb-4">Admin Dashboard</h2>
                 <nav className="space-y-4">
                   <div className="group">
                     <button className="bg-color-2 text-white p-2 rounded-lg w-full text-left group-hover:bg-color-3">
                       Manage Medicinal Plants
                     </button>
                     <div className="hidden group-hover:block bg-color-3 rounded-lg mt-2 space-y-2">
                       <Link to="/admin-medicinalPlant/insert" className="block text-white px-4 py-2 hover:bg-color-2">Insert</Link>
                       <Link to="/admin-medicinalPlant/update" className="block text-white px-4 py-2 hover:bg-color-2">Update</Link>
                       <Link to="/admin-medicinalPlant/view" className="block text-white px-4 py-2 hover:bg-color-2">View</Link>
                       <Link to="/admin-medicinalPlant/delete" className="block text-white px-4 py-2 hover:bg-color-2">Delete</Link>
                     </div>
                   </div>
       
                   <div className="group">
                     <button className="bg-color-2 text-white p-2 rounded-lg w-full text-left group-hover:bg-color-3">
                       Manage Diseases
                     </button>
                     <div className="hidden group-hover:block bg-color-3 rounded-lg mt-2 space-y-2">
                       <Link to="/admin-disease/insert" className="block text-white px-4 py-2 hover:bg-color-2">Insert</Link>
                       <Link to="/admin-disease/update" className="block text-white px-4 py-2 hover:bg-color-2">Update</Link>
                       <Link to="/admin-disease/view" className="block text-white px-4 py-2 hover:bg-color-2">View</Link>
                       <Link to="/admin-disease/delete" className="block text-white px-4 py-2 hover:bg-color-2">Delete</Link>
                     </div>
                   </div>
                    <div className="group">
                                                 <button className="bg-color-2 text-white p-2 rounded-lg w-full text-left group-hover:bg-color-3">
                                                   Manage Herbal Preparations
                                                 </button>
                                                 <div className="hidden group-hover:block bg-color-3 rounded-lg mt-2 space-y-2">
                                                   <Link to="/admin-herbalprep/insert" className="block text-white px-4 py-2 hover:bg-color-2">Insert</Link>
                                                   <Link to="/admin-herbalprep/update" className="block text-white px-4 py-2 hover:bg-color-2">Update</Link>
                                                   <Link to="/admin-herbalprep/view" className="block text-white px-4 py-2 hover:bg-color-2">View</Link>
                                                   <Link to="/admin-herbalprep/delete" className="block text-white px-4 py-2 hover:bg-color-2">Delete</Link>
                                                 </div>
                                               </div>
                                   
                                               <div className="group">
                                                 <button className="bg-color-2 text-white p-2 rounded-lg w-full text-left group-hover:bg-color-3">
                                                   Manage Ayurvedic Treatments
                                                 </button>
                                                 <div className="hidden group-hover:block bg-color-3 rounded-lg mt-2 space-y-2">
                                                   <Link to="/admin-ayumed/insert" className="block text-white px-4 py-2 hover:bg-color-2">Insert</Link>
                                                   <Link to="/admin-ayumed/update" className="block text-white px-4 py-2 hover:bg-color-2">Update</Link>
                                                   <Link to="/admin-ayumed/view" className="block text-white px-4 py-2 hover:bg-color-2">View</Link>
                                                   <Link to="/admin-ayumed/delete" className="block text-white px-4 py-2 hover:bg-color-2">Delete</Link>
                                                 </div>
                                               </div>
                 </nav>
               </div>

        {/* Main Content */}
        <main className="flex-grow bg-gray-100 p-8 flex items-center justify-center">
          <div className="bg-color-4 text-lg text-white p-6 w-full max-w-lg rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-serif font-bold mb-6">Add Ayurvedic Treatment</h1>
            <div className="flex flex-col">
              <input
                type="text"
                name="treatmentName"
                placeholder="Ayurvedic Treatment Name"
                value={formData.treatmentName}
                onChange={handleInputChange}
                className="p-2 m-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration (e.g., 10 days)"
                value={formData.duration}
                onChange={handleInputChange}
                className="p-2 m-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="disease"
                placeholder="Associated Disease"
                value={formData.disease}
                onChange={handleInputChange}
                className="p-2 m-2 border border-gray-300 rounded-md"
              />
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="bg-color-1 p-2 m-2 rounded-lg text-white hover:border-2 hover:border-color-5"
              >
                Add Ayurvedic Treatment
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default AyuTreatInsert;
