import react, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import Sidebar from '../components/sidebar';
import { db } from '../../../firebase';

function isActive(input) {
  return input ? 'font-bold underline' : 'font-semi-bold';
}

export default function UserBusinessIntelligence() {
  const [currentPage, setCurrentPage] = useState('request');
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInput = () => {
      const getPostsFromFirebase = [];
      const unsubscribe = onSnapshot(collection(db, 'your_files_collection_name'), (querySnapshot) => {
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


  function updateSelect() {
    try {
      const dropdown = document.getElementById("my-dropdown");
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
  if (currentPage == 'request') {
    return (
      <>
        <div className="flex border h-screen w-auto">
          <Sidebar />
          <div className="container grid h-10 grid-cols-7 mx-auto gap-3">
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <table className="col-span-7 min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.key}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.businessName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.fileName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.period}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hover:font-bold">
                      <a href={`${post.downloadURL}`}>Download</a>
                      { }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  } else if (currentPage == 'result') // jika lagi di panel result
    return (
      <>
        <div className="flex border h-screen w-auto">

          {/* Sidebar */}
          <Sidebar />

          {/* dashboard content */}
          <div className='container grid h-10 grid-cols-7 mx-auto gap-3'>

            {/* navigation */}
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Dashboard */}
            <div className='flex items-center mb-4'>
              <p className='block text-sm font-medium'>Select inquiry: </p>
            </div>
            <select className='bg-[#121212] border col-span-6 w-full px-8 py-3 mb-4' id="my-dropdown" onClick={() => `${updateSelect()}`}></select>

            {/* Input nama bisnis */}
            <div className='flex items-center mb-4'>
              <label htmlFor='url' className='block text-sm font-medium'>
                Power BI Url
              </label>
            </div>
            <div className='col-span-6'>
              <input
                type="text"
                id='url'
                className='w-full border bg-[#121212] rounded-md px-8 py-3 mb-4'
                placeholder="Insert Your Power BI URL"
                // value={businessName}
                // onChange={(e) => setBusinessName(e.target.value)}
                required
              />
            </div>

            {/* Input deskripsi bisnis */}
            <div className='flex mt-4'>
              <label htmlFor='recommend' className='block text-sm font-medium'>
                Recommendation
              </label>
            </div>
            <div className='col-span-6 w-full'>
              <textarea
                id='recommend'
                className='w-full rows-3 border bg-[#121212] resize-none rounded-md px-8 mb-4 pt-3 h-[160px]'
                placeholder='Desribe Your Recommendation'
                // value={businessDesc}
                // onChange={(e) => setBusinessDesc(e.target.value)}
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

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <div className="col-span-7 flex mt-4 mx-auto">
      <button onClick={() => setCurrentPage('request')} className={"flex justify-left flex-row gap-8 m-4 " + isActive(currentPage == 'request')}>
        Request
      </button>
      <button onClick={() => setCurrentPage('result')} className={"flex justify-left flex-row gap-8 m-4 " + isActive(currentPage == 'result')}>
        Result
      </button>
    </div>
  )
}