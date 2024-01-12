import react, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Sidebar from '../components/Sidebar';
import { app } from '../../../firebase';

export default function UserBusinessIntelligence() {

  const [upload, setUpload] = useState(true);
  const [result, setResult] = useState(false);
  const [file, setFile] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [period, setPeriod] = useState('');
  const [uploadStatus, setUploadStatus] = useState(null);

  // fungsi untuk cari tahu di halaman result atau report
  function isActive(input) {
    if (input == true) {
      return 'font-bold underline';
    } else {
      return 'font-semi-bold';
    }
  }

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


    } catch (error) {
      console.error('Error uploading file:', error);
      // Implementasikan tindakan error di sini
      alert('Error uploading file. Please try again.');
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  // jika lagi di panel upload
  if (upload) {
    return (
      <>
        <div className="flex border h-screen w-auto">

          {/* Sidebar */}
          <Sidebar />

          {/* dashboard content */}
          <div className="container grid h-10 grid-cols-7 mx-auto gap-3">

            {/* navigation */}
            <div className="col-span-7 flex mt-4 mx-auto">
              <a onClick={() => { setUpload(true); setResult(false); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(upload)} href='#'>
                Upload
              </a>
              <a onClick={() => { setUpload(false); setResult(true); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
                Result
              </a>
            </div>

            <h1 className="col-span-7 text-2xl font-bold mb-4">Business Intelligence Form</h1>

            {/* Input nama bisnis */}
            <div className='flex items-center mb-4'>
              <label htmlFor='businessname' className='block text-sm font-medium'>
                Business Name
              </label>
            </div>
            <div className='col-span-6'>
              <input
                type="text"
                id='businessname'
                className='w-full border bg-[#121212] rounded-md px-8 py-3 mb-4'
                placeholder="Enter Your Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
              />
            </div>

            {/* Input period */}
            <div className='flex items-center mb-4'>
              <label htmlFor='period' className='block text-sm font-medium'>
                Period
              </label>
            </div>
            <div className='col-span-6'>
              <input
                type='date'
                id='period'
                className='w-full border bg-[#121212] rounded-md px-8 py-3 mb-4'
                placeholder="Select the period"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                required
              />
            </div>

            {/* Input File */}
            <div className='flex items-center mb-4'>
              <label htmlFor='file' className='block text-sm font-medium'>
                Upload Your Data
              </label>
            </div>
            <div className='col-span-6'>
              <input
                id='file'
                name="file"
                type="file"
                accept=".xlsx"
                onChange={handleFileChange}
                className='w-full mb-4'
                required
              />
            </div>

            {/* Tombol Upload */}
            <div className='col-span-6'></div>
            <button
              className="col-span-1 bg-blue-500 text-white rounded-full px-8 py-3 mt-4"
              onClick={handleFileUpload}
            >
              Submit
            </button>

            <div className="col-span-7">
              {uploadStatus && (
                <p className={`mt-2 text-sm ${uploadStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {uploadStatus}
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else if (result) // jika lagi di panel result
    return (
      <>
        <div className="flex border h-screen w-auto">

          {/* Sidebar */}
          <Sidebar />

          {/* dashboard content */}
          <div className='flex flex-col container mx-auto gap-3'>

            {/* navigation */}
            <div className='flex items-center mx-auto mt-4'>
              <a onClick={() => { setUpload(true); setResult(false); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(upload)} href='#'>
                Upload
              </a>
              <a onClick={() => { setUpload(false); setResult(true); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
                Result
              </a>
            </div>

            {/* Dashboard */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Power BI Analysis Dashboard</h1>
              {/* TO-DO Dashboard */}
            </div>
          </div>
        </div>
      </>
    );

}