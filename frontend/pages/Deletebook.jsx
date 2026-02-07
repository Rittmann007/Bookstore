import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Backbutton from '../utils/Backbutton';
import {enqueueSnackbar} from "notistack"
function Deletebook() {
  const [loading, setloading] = useState(false)
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  function handleDelete() {
    setloading(true)
    axios.delete(`/users/Book/${id}`)
    .then(()=>{
      enqueueSnackbar("book deleted successfully",{variant:"success"})
      navigate('/')
    })
    .catch((error)=>{
      enqueueSnackbar("an error occured",{variant:"error"})
    })
    .finally(()=>{
      setloading(false)
    })
  }
  return (
    <>
    <Backbutton/>
    <div className='h-screen bg-linear-to-br from-red-50 to-pink-100 flex items-center justify-center px-4 overflow-hidden'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg border border-red-200 p-8'>
        {loading==true? (
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600'></div>
              <h1 className='mt-4 text-lg font-semibold text-gray-700'>loading ...</h1>
            </div>
          </div>
        ) : (
          <div className='text-center space-y-6'>
            <h2 className='text-2xl font-bold text-gray-800'>Confirm Delete</h2>
            <p className='text-lg text-gray-600'>Are you sure you want to delete?</p>
            <button 
              onClick={handleDelete}
              className='w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg'
            >
              Yes, Delete
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Deletebook