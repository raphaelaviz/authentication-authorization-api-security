import React from 'react'

const DeniedPage = () => {
  return (
    <div className='flex-center flex-col'>
        <h1 className='text-4xl mt-10 text-red-500'>You're not authorized to access the page.</h1>
        <h2 className='text-2xl mt-10 text-red-500'>Please register and sign in as Admin to see the content.</h2>
    </div>
  )
}

export default DeniedPage