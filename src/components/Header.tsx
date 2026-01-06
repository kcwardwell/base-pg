import { Link } from '@tanstack/react-router'



export default function Header() {
  

  return (
    <>
      <header className="p-4 border-b border-gray-300 mb-4 flex justify-between items-center">
        <nav className='flex items-center'>
          <div>
            <Link to="/" className="text-xl font-bold">
             Home
            </Link>
            <Link to="/" className="text-xl font-bold">
             About
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
