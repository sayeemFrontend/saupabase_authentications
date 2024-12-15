import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({});
    navigate('/login');
  };
  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="" aria-label="Home">
            <img
              src="https://www.svgrepo.com/show/491978/gas-costs.svg"
              height="40"
              width="40"
            />
          </Link>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
          Features
        </Link>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
          Pricing
        </Link>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
          Blog
        </Link>
        <Link className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
          Docs
        </Link>
      </div>
      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <div className="inline-flex">
          <Link
            to="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
          >
            Login
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              className="rounded-full border w-12"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="person"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/admin')}>
              Admin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/editor')}>
              Editor
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/')}>
              Home
            </DropdownMenuItem>

            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
