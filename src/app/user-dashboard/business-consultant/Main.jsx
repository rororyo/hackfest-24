import react, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Sidebar from '../components/Sidebar';
// import Sidebar from '../../components/Sidebar';
import { app } from '../../../firebase';

export default function UserBusinessConsultant() {

  const [upload, setUpload] = useState(true);
  const [result, setResult] = useState(false);
  // const [file, setFile] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [businessDesc, setBusinessDesc] = useState('');
  const [problemDesc, setProblemDesc] = useState('');
  const [uploadStatus, setUploadStatus] = useState(null);

  // fungsi untuk cari tahu di halaman result atau report
  function isActive(input) {
    if (input == true) {
      return 'font-bold underline';
    } else {
      return 'font-semi-bold';
    }
  }

  const handleFileUpload = async () => {
    try {
      // Simpan informasi file ke Firestore
      const db = getFirestore(app);
      const fileCollection = collection(db, 'business-consultant'); // Ganti dengan nama koleksi Anda
      const newFileRef = await addDoc(fileCollection, {
        fileName: businessName,
        businessDesc,
        problemDesc
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

            <h1 className="col-span-7 text-2xl font-bold mb-4">Business Consultant Form</h1>

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

            {/* Input deskripsi bisnis */}
            <div className='flex mt-4'>
              <label htmlFor='businessdesc' className='block text-sm font-medium'>
                Business Description
              </label>
            </div>
            <div className='col-span-6 w-full'>
              <textarea
                id='businessdesc'
                className='w-full rows-3 border bg-[#121212] resize-none rounded-md px-8 mb-4 pt-3 h-[160px]'
                placeholder='Desribe Your Business'
                value={businessDesc}
                onChange={(e) => setBusinessDesc(e.target.value)}
                required
              />
            </div>

            {/* Input permintaan analisis pasar */}
            <div className='flex mt-4'>
              <label htmlFor='problemdesc' className='block text-sm font-medium'>
                Problem Description
              </label>
            </div>
            <div className='col-span-6 w-full'>
              <textarea
                id='problemdesc'
                className='w-full rows-3 border bg-[#121212] resize-none rounded-md px-8 mb-4 pt-3 h-[160px]'
                placeholder='Desribe Your Problem'
                value={problemDesc}
                onChange={(e) => setProblemDesc(e.target.value)}
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
              <h1 className="text-2xl font-bold mb-4">TO-DO Backend</h1>
              {/* TO-DO Backend */}
            </div>
          </div>
        </div>
      </>
    );

}