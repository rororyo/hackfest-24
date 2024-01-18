import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import Sidebar from './components/sidebar';
import { db, auth } from '../../firebase';

function AdminDash() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchMessages = () => {
      const getPostsFromFirebase = [];
      const unsubscribe = onSnapshot(collection(db, 'messages'), (querySnapshot) => {
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

  if (auth.currentUser) {
    if (auth.currentUser.email == 'ryo@admin.com') {
      return (
        <>
          <div className='flex border h-screen w-max-screen'>
            <Sidebar />
            <div className='container'>
              <div className='flex flex-col w-full h-full mx-auto gap-3 py-10 px-5'>
                <table className="divide-y divide-gray-200">
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
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.key}>
                        <td className="px-6 py-4">
                          {post.displayName}
                        </td>
                        <td className="px-6 py-4">
                          {post.text}
                        </td>
                        <td className="px-6 py-4">
                          {post.timestamp.toDate().toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={() => handleDeleteMessage(post.key)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          {/* access denied */}
          <div className="flex flex-col w-full h-full mx-auto gap-3 py-10">
            <div className="font-bold mx-auto text-3xl">Access Denied</div>
          </div>
        </>
      )
    }
  }
  else {
    <Sidebar />
  }
}
export default AdminDash;
