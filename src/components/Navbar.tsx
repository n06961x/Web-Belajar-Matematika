import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const location = useLocation();

     const navigation = [
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
          { name: 'Programs', href: '/programs' },
          { name: 'Admissions', href: '/admissions' },
          { name: 'Facilities', href: '/facilities' },
          { name: 'Contact', href: '/contact' },
     ];

     const isActive = (path: string) => location.pathname === path;

     return (
          <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 z-50'>
               <div className='max-w-7xl mx-auto px-6'>
                    <div className='flex justify-between items-center h-16'>
                         {/* Logo */}
                         <Link to='/' className='flex items-center space-x-2'>
                              <div className='p-2 bg-emerald-100 rounded-lg'>
                                   <img
                                        src='https://smaunggulalfahd.sch.id/wp-content/uploads/2025/02/cropped-logo-sma-unggul-alfahd.png'
                                        alt=''
                                        className='w-6 h-6 text-emerald-600'
                                   />
                              </div>
                              <span className='text-xl font-bold text-gray-800'>
                                   SMA Unggul Islam Al-Fahd
                              </span>
                         </Link>

                         {/* Desktop Navigation */}
                         <div className='hidden md:flex items-center space-x-8'>
                              {navigation.map((item) => (
                                   <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`text-sm font-medium transition-colors duration-200 ${
                                             isActive(item.href)
                                                  ? 'text-emerald-600 border-b-2 border-emerald-600'
                                                  : 'text-gray-600 hover:text-emerald-600'
                                        } px-3 py-2`}
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                              <Button className='bg-emerald-600 hover:bg-emerald-700 text-white'>
                                   Apply Now
                              </Button>
                         </div>

                         {/* Mobile menu button */}
                         <div className='md:hidden'>
                              <button
                                   onClick={() => setIsOpen(!isOpen)}
                                   className='p-2 rounded-md text-gray-600 hover:text-emerald-600 hover:bg-gray-100'
                              >
                                   {isOpen ? (
                                        <X className='w-6 h-6' />
                                   ) : (
                                        <Menu className='w-6 h-6' />
                                   )}
                              </button>
                         </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                         <div className='md:hidden bg-white border-t border-gray-200'>
                              <div className='px-2 pt-2 pb-3 space-y-1'>
                                   {navigation.map((item) => (
                                        <Link
                                             key={item.name}
                                             to={item.href}
                                             onClick={() => setIsOpen(false)}
                                             className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                                                  isActive(item.href)
                                                       ? 'text-emerald-600 bg-emerald-50'
                                                       : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                                             }`}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                                   <div className='px-3 pt-2'>
                                        <Button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white'>
                                             Apply Now
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </nav>
     );
};

export default Navbar;
