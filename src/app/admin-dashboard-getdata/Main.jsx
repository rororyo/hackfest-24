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
const db = getFirestore(app);
const auth = getAuth();

function AdminDash() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchMessages = () => {
            const getPostsFromFirebase = [];
            const unsubscribe = onSnapshot(collection(db, 'your_files_collection_name'), (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getPostsFromFirebase.push({
                        businessName: doc.data().businessName,
                        downloadURL: doc.data().downloadURL,
                        fileName: doc.data().fileName,
                        period: doc.data().period,
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
        fetchMessages();
        
    }, [db, auth, loading]);

    const handleDeleteMessage = async (postId) => {
        try {
            await deleteDoc(doc(db, 'messages', postId));
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const handleDeleteAllMessages = async () => {
        try {
            const querySnapshot = await collection(db, 'messages').get();
            const batch = db.batch();

            querySnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });

            await batch.commit();
        } catch (error) {
            console.error('Error deleting all messages:', error);
        }
    };

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
                </div>

                <div className='flex flex-col w-auto h-full mr-auto gap-3 py-10 overflow-x-auto'>
                    {/* Table to display messages */}
                    <table className="w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Business Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    File Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Download URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Period
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
                                        <a
                                            href={post.downloadURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline cursor-pointer"
                                        >
                                            Download
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {post.period}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default AdminDash;