import react, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import Sidebar from '../components/sidebar';
import { db } from '../../../firebase';

export default function AdminBC() {

  const [request, setRequest] = useState(true);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInput = () => {
      const getPostsFromFirebase = [];
      const unsubscribe = onSnapshot(collection(db, 'business-consultant'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

      // Cleanup function
      return () => unsubscribe();
    };

    // Fetch both messages and user accounts
    fetchInput();
    
  })

  // fungsi untuk cari tahu di halaman result atau report
  function isActive(input) {
    if (input == true) {
      return 'font-bold underline';
    } else {
      return 'font-semi-bold';
    }
  }

  function updateSelect() {
    try {
      const dropdown = document.getElementById("bc-dropdown");
      dropdown.innerHTML = "";
      posts.forEach(post => {
        const newOption = document.createElement("option");
        newOption.value = post.key; // Use a unique identifier for each option
        newOption.text = post.fileName; // Display name for users
        // console.log(newOption);
        dropdown.add(newOption);
      });
    } catch (error) {
      console.log(error);
    }
  }



  // jika lagi di panel upload
  if (request) {
    return (
      <>
        <div className="flex border h-screen w-auto">

          {/* Sidebar */}
          <Sidebar />

          {/* dashboard content */}
          <div className="container grid h-10 grid-cols-7 mx-auto gap-3">

            {/* navigation */}
            <div className="col-span-7 flex mt-4 mx-auto">
              <a onClick={() => { setRequest(true); setResult(false); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(request)} href='#'>
                Request
              </a>
              <a onClick={() => { setRequest(false); setResult(true); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
                Result
              </a>
            </div>

            <table className="col-span-7 min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Problem Description
                  </th>

                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.key}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.fileName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.businessDesc}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.problemDesc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <div className='container grid h-10 grid-cols-7 mx-auto gap-3'>

            {/* navigation */}
            <div className="col-span-7 flex mt-4 mx-auto">
              <a onClick={() => { setRequest(true); setResult(false); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(request)} href='#'>
                Request
              </a>
              <a onClick={() => { setRequest(false); setResult(true); }} className={"flex justify-left flex-row gap-8 m-4 " + isActive(result)} href='#'>
                Result
              </a>
            </div>

            {/* Dashboard */}
            <div className='flex items-center mb-4'>
              <p className='block text-sm font-medium'>Select inquiry: </p>
            </div>
            <select className='bg-[#121212] border col-span-6 w-full px-8 py-3 mb-4' id="bc-dropdown" onClick={updateSelect}></select>


 
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
                accept=".pbix"
                // onChange={handleFileChange}
                className='w-full mb-4'
                required
              />
            </div>

            {/* Tombol Upload */}
            <div className='col-span-6'></div>
            <button
              className="col-span-1 bg-blue-500 text-white rounded-full px-8 py-3 mt-4"
            // onClick={handleFileUpload}
            >
              Submit
            </button>

            <div className="col-span-7">
              {/* {uploadStatus && ( */}
              {/* <p className={`mt-2 text-sm ${uploadStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}> */}
              {/* {uploadStatus} */}
              {/* </p> */}
              {/* )} */}
            </div>



          </div>
        </div>
      </>
    );

}