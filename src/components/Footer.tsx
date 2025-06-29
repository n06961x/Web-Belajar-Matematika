import { Heart, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
     const socialLinks = [
          {
               icon: Facebook,
               href: 'https://www.facebook.com/smaunggulislamalfahd/?locale=id_ID',
               label: 'Facebook',
          },

          {
               icon: Instagram,
               href: 'https://www.instagram.com/smaunggulislamalfahd/?hl=en',
               label: 'Instagram',
          },
          {
               icon: Youtube,
               href: 'https://www.youtube.com/@smaunggulislamal-fahd1452',
               label: 'YouTube',
          },
     ];

     const quickLinks = [
          'About Us',
          'Academic Programs',
          'Admissions',
          'Faculty',
          'Student Life',
          'News & Events',
          'Contact Us',
          'Alumni',
     ];

     return (
          <footer className='bg-gray-900 text-white py-16'>
               <div className='max-w-7xl mx-auto px-6'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                         {/* School Info */}
                         <div className='lg:col-span-2'>
                              <h3 className='text-2xl font-bold mb-4 text-emerald-400'>
                                   SMA Unggul Islam Al-Fahd
                              </h3>
                              <p className='text-gray-300 leading-relaxed mb-6'>
                                   Dedicated to providing excellent Islamic
                                   education that nurtures the mind, body, and
                                   soul. Preparing students for success in this
                                   world and the hereafter.
                              </p>
                              <div className='flex space-x-4'>
                                   {socialLinks.map((social, index) => (
                                        <a
                                             key={index}
                                             href={social.href}
                                             className='p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors duration-300'
                                             aria-label={social.label}
                                        >
                                             <social.icon className='w-5 h-5' />
                                        </a>
                                   ))}
                              </div>
                         </div>

                         {/* Quick Links */}
                         <div>
                              <h4 className='text-lg font-semibold mb-4 text-emerald-400'>
                                   Quick Links
                              </h4>
                              <ul className='space-y-2'>
                                   {quickLinks
                                        .slice(0, 4)
                                        .map((link, index) => (
                                             <li key={index}>
                                                  <a
                                                       href='#'
                                                       className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'
                                                  >
                                                       {link}
                                                  </a>
                                             </li>
                                        ))}
                              </ul>
                         </div>

                         {/* More Links */}
                         <div>
                              <h4 className='text-lg font-semibold mb-4 text-emerald-400'>
                                   Resources
                              </h4>
                              <ul className='space-y-2'>
                                   {quickLinks.slice(4).map((link, index) => (
                                        <li key={index}>
                                             <a
                                                  href='#'
                                                  className='text-gray-300 hover:text-emerald-400 transition-colors duration-300'
                                             >
                                                  {link}
                                             </a>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className='border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center'>
                         <p className='text-gray-400 text-sm mb-4 md:mb-0'>
                              © 2025 SMA Unggul Islam Al-Fahd. All rights
                              reserved.
                         </p>
                         <div className='flex items-center gap-2 text-gray-400 text-sm'>
                              <span>Made with</span>
                              <Heart className='w-4 h-4 text-red-500' />
                              <span>for Islamic education</span>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
