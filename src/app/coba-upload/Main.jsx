import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHZOmC3wqbu6oTllK2QOCUyLo4V2kX0vk",
  authDomain: "mychatapp-81ceb.firebaseapp.com",
  projectId: "mychatapp-81ceb",
  storageBucket: "mychatapp-81ceb.appspot.com",
  messagingSenderId: "186103250800",
  appId: "1:186103250800:web:1d3d4a377f81df0b7619b5",
  measurementId: "G-JRC0PPJ161"
};

const app = initializeApp(firebaseConfig);

function BusinessIntelligence() {
  const [file, setFile] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [period, setPeriod] = useState('');
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    try {
      const storage = getStorage(app);
      const storageRef = ref(storage, `uploads/${file.name}`);

      // Mengunggah file ke Firebase Storage
      await uploadBytes(storageRef, file);

      console.log('File uploaded successfully');
      setUploadStatus('File uploaded successfully');

      // Dapatkan URL unduhan file
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Download URL:', downloadURL);

      // Simpan informasi file ke Firestore
      const db = getFirestore(app);
      const fileCollection = collection(db, 'your_files_collection_name'); // Ganti dengan nama koleksi Anda
      const newFileRef = await addDoc(fileCollection, {
        fileName: file.name,
        downloadURL,
        businessName,
        period,
      });

      console.log('File information saved to Firestore with ID:', newFileRef.id);

      // Implementasikan tindakan sukses di sini
      alert('File uploaded successfully');

    } catch (error) {
      console.error('Error uploading file:', error);
      // Implementasikan tindakan error di sini
      alert('Error uploading file. Please try again.');
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Business Intelligence Form</h1>

      {/* Nama Bisnis */}
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your business name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>

      {/* Periode */}
      <div className="mb-4">
        <label htmlFor="period" className="block text-sm font-medium text-gray-600">
          Period
        </label>
        <input
          type="date"
          id="period"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Select the period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </div>

      {/* Input File */}
      <div className="mb-4">
        <label htmlFor="file" className="block text-sm font-medium text-gray-600">
          Upload Your Data
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Tombol Upload */}
      <button
        className="bg-blue-500 text-white rounded-lg px-8 py-3 mt-4"
        onClick={handleFileUpload}
      >
        Upload File
      </button>
      {uploadStatus && (
        <p className={`mt-2 text-sm ${uploadStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
}

export default BusinessIntelligence;
