import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import Sidebar from '../../components/Sidebar';

const firebaseConfig = {
    apiKey: "AIzaSyDHZOmC3wqbu6oTllK2QOCUyLo4V2kX0vk",
    authDomain: "mychatapp-81ceb.firebaseapp.com",
    projectId: "mychatapp-81ceb",
    storageBucket: "mychatapp-81ceb.appspot.com",
    messagingSenderId: "186103250800",
    appId: "1:186103250800:web:1d3d4a377f81df0b7619b5",
    measurementId: "G-JRC0PPJ161"
};

const isPageActive = (pathname) => {
    return location.pathname === pathname ? 'font-bold border bg-[#121212] w-fit mx-auto rounded-xl p-1' : '';
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function AdminDash() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

    useEffect(() => {
        // const fetchMessages = () => {
        //     const getPostsFromFirebase = [];
        //     const unsubscribe = onSnapshot(collection(db, 'your_files_collection_name'), (querySnapshot) => {
        //         querySnapshot.forEach((doc) => {
        //             getPostsFromFirebase.push({
        //                 businessName: doc.data().businessName,
        //                 downloadURL: doc.data().downloadURL,
        //                 fileName: doc.data().fileName,
        //                 period: doc.data().period,
        //                 key: doc.id,
        //             });
        //         });
        //         setPosts(getPostsFromFirebase);
        //         setLoading(false);
        //     });

        //     // Cleanup function
        //     return () => unsubscribe();
        // };


        const fetchUserAccounts = async () => {
          try {
              const userRecords = await getAuth().listUsers();
              const userData = userRecords.users.map((userRecord) => ({
                  uid: userRecord.uid,
                  email: userRecord.email,
                  displayName: userRecord.displayName,
                  // Add other user properties as needed
              }));

                setUsers(userData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user accounts:', error);
                setLoading(false);
            }
        };

        // Fetch both messages and user accounts
        // fetchMessages();
        fetchUserAccounts();
    }, [loading]);

    return (
        <>
            {/* Your existing header content */}
            <div className='flex border h-screen w-auto'>

                {/* Sidebar */}
                <div className='flex flex-col w-1/6 h-full py-8 gap-1 border-r bg-[#0C132F]'>
                    <a href="/admin-dashboard" className='hover:scale-110'>
                        <div className='text-3xl font-bold text-center mt-10`'>Z-Sharp</div>
                        <div className='text-xl font-bold text-center mt-10`'>Admin Dashboard</div>
                    </a>
                    <a href="/admin-dashboard" className='mt-8'>
                        <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard')}`}>Business Assistant</div>
                    </a>
                    <a href="/admin-dashboard/BI" className='mt-4'>
                        <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/BI')}`}>Business Intelligence</div>
                    </a>
                    <a href="/admin-dashboard/MR" className='mt-4'>
                        <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/MR')}`}>Market Research</div>
                    </a>
                    <a href="/admin-dashboard/BC" className='mt-4'>
                        <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/BC')}`}>Business Consultant</div>
                    </a>
                </div>

                 <div className='flex flex-col ml-auto my-auto gap-5 px-5'>
                    {/* User information */}
                    {users.map((user) => (
                        <div key={user.uid}>
                            <p>Email: {user.email}</p>
                            <p>DisplayName: {user.displayName}</p>
                            {/* Add other user information as needed */}
                        </div>
                    ))}
                </div>
                {/* ... */}
            </div>
        </>
    );
}
export default AdminDash;