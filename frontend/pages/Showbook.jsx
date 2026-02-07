import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Backbutton from '../utils/Backbutton'
import { enqueueSnackbar } from 'notistack'

function Showbook() {
    const [book, setbook] = useState({})
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    
    useEffect(() => {
    setloading(true)
    axios.get(`https://bookstore-backend-s2xy.onrender.com/users/Book/${id}`)
    .then((response)=>{
        setbook(response.data.data)
    })
    .catch((error)=>{
      enqueueSnackbar("something went wrong",{variant:"error"})
        console.log(error)
    })
    .finally(()=>{
        setloading(false)
    })
    }, [])
    
  return (
    <>
     <div>
        <Backbutton/>
     </div>
     
     <div className='book-details bg-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto'>
        {loading==true?<h1 className='p-6 text-center font-semibold text-gray-600'>loading please wait....</h1>:
        <div className='divide-y'>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>ID</span>
            <span className='text-gray-700 mt-2 sm:mt-0 block break-all'>{book._id}</span>
          </div>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Title</span>
            <span className='text-gray-700 mt-2 sm:mt-0'>{book.title}</span>
          </div>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Author</span>
            <span className='text-gray-700 mt-2 sm:mt-0'>{book.author}</span>
          </div>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Publish Year</span>
            <span className='text-gray-700 mt-2 sm:mt-0'>{book.publishyear}</span>
          </div>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Created At</span>
            <span className='text-gray-700 mt-2 sm:mt-0'>{new Date(book.createdAt).toDateString()}</span>
          </div>
          <div className='book-detail-row px-4 py-4 sm:px-6 sm:py-4 sm:flex sm:justify-between sm:items-center hover:bg-gray-50 transition'>
            <span className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Updated At</span>
            <span className='text-gray-700 mt-2 sm:mt-0'>{new Date(book.updatedAt).toDateString()}</span>
          </div>
          
        </div>
}
     </div>
    </>
  )
}

export default Showbook