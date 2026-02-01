import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Backbutton from '../utils/Backbutton'

function Createbook() {
  const [title, settitle] = useState('')
  const [author, setauthor] = useState('')
  const [publishyear, setpublishyear] = useState(0)
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  function handleBooksubmit() {
    const data = {
      title,
      author,
      publishyear
    }
    setloading(true)
    axios.post('http://localhost:3000/users',data)
    .then(()=>{
       navigate('/')
    })
    .catch((error)=>{
      alert("an error ocurred!!")
      console.log(error)
    })
    .finally(()=>{
      setloading(false)
    })

  }
  return (
    <>
    <Backbutton/>
    <div className='h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 overflow-hidden'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg border border-indigo-200 p-8'>
        {loading==true ? (
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600'></div>
              <h1 className='mt-4 text-lg font-semibold text-gray-700'>Submitting ....</h1>
            </div>
          </div>
        ) : (
          <div className='space-y-6'>
            <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Create New Book</h2>
            
            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e)=>{settitle(e.target.value)}} 
                placeholder='Enter book title'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Author</label>
              <input 
                type="text" 
                value={author} 
                onChange={(e)=>{setauthor(e.target.value)}} 
                placeholder='Enter author name'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>Publish Year</label>
              <input 
                type="number" 
                value={publishyear} 
                onChange={(e)=>{setpublishyear(e.target.value)}} 
                placeholder='Enter publish year'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition duration-200'
              />
            </div>

            <button 
              onClick={handleBooksubmit}
              className='w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg'
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Createbook