import React from 'react'

const UserPage = () => {
  return (
    <main className="flex flex-col items-center space-y-6 pt-12 h-4/5">
      <h1 className='text-6xl'>PROTECTED USER PAGE</h1>
      <h2 className='text-3xl'>Only logged in users can see it.</h2>
      <div className='border-2 border-dashed border-gray-400 w-3/5 p-6'>
        <h1 className='text-3xl mb-4'>User Content</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
      </div>
    </main>
  )  
}

export default UserPage