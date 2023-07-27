'use client'

import React, { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { registerUser } from '../lib/utils';

export default function RegisterUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = name.trim() !== '' && email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await registerUser(name, email, password, role);

    if (response.ok) {
      toast.success('Account created! You can now sign in.', { position: 'top-center', duration: 7000 });
      setName('');
      setEmail('');
      setPassword('');
      setRole('User');
      setIsLoading(false);
    }
  };

  return (
    <div className='form-container'>
      <h1 className='text-center text-4xl mb-4'>Register</h1>
      <form onSubmit={handleSubmit} className='flex-col flex space-y-4'>
        <input
          type='text'
          className='border-2 border-gray-300 rounded-md p-2 border-opacity-40'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='border-2 border-gray-300 rounded-md p-2 border-opacity-40'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='border-2 border-gray-300 rounded-md p-2 border-opacity-40'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex space-x-5'>
          <label htmlFor='roleSelect' className='mt-2'>
            Role:
          </label>
          <select
            id='roleSelect'
            className='border-2 border-gray-300 rounded-md p-2 border-opacity-40'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value='User'>User</option>
            <option value='Admin'>Admin</option>
          </select>
        </div>

        <button className='nav-button data-[disabled=true]:bg-gray-400 data-[disabled=true]:cursor-default' type='submit' data-disabled={!isFormValid} >
          {isLoading ? (
            <>
              <span className='loading loading-ring loading-md'></span>
              <span className='loading loading-ring loading-md'></span>
              <span className='loading loading-ring loading-md'></span>
              <span className='loading loading-ring loading-md'></span>
            </>
          ) : (
            'Register'
          )}
        </button>

        <Toaster />
      </form>
    </div>
  );
}
