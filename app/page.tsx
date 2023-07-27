
import RegisterUserForm from './components/RegisterUserForm'

export default function Home() {
  return (
    <main className='flex'>
      <div className='flex flex-col w-1/2 items-center pt-10 space-y-10 mt-6'>
          <h1 className='text-6xl'>HOME PAGE</h1>
          <h2 className='text-3xl'>Anyone can see it.</h2>
          <div className='flex flex-col border-2 border-gray-300 border-dashed border-opacity-80 rounded-lg p-6'>

              <p>1. Create different accounts in order to test the authentication and authorization features.</p>
              <p>2. For convenience, you can type anything in the fields. No need to use real emails.</p>
              <p>3. Just remember to use the same credentials when signing in.</p>
              <p>4. Your passwords are properly encrypted.</p>
              
          </div>
      </div>
      
          <RegisterUserForm/>
            
    </main>
  )
}
