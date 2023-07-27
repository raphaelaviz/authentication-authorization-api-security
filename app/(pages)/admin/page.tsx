import React from 'react'

const AdminPage = () => {
  return (
    <main className="flex flex-col items-center space-y-6 pt-12 h-4/5">
      <h1 className='text-6xl text-yellow-600'>PROTECTED ADMIN PAGE</h1>
      <h2 className='text-3xl text-yellow-600'>Only admins can see it.</h2>
      <div className='border-2 border-dashed border-yellow-600 w-3/5 p-6'>
        <h1 className='text-3xl mb-4 text-yellow-600'>Admin Content</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur fugiat. Officia perspiciatis dolore inventore! Vel soluta, doloremque natus reiciendis laborum vero, omnis tenetur dicta vitae eos iusto minima? Nemo.</p>
      </div>
    </main>
  )
}

export default AdminPage