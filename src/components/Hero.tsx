import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
     return (
          <section className='relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center overflow-hidden'>
               {/* Decorative background elements */}
               <div className="absolute inset-0 bg-[url('')] bg-cover bg-center opacity-5"></div>
               <div className='absolute top-20 right-20 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse'></div>
               <div className='absolute bottom-32 left-16 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse delay-1000'></div>

               <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
                    <div className='mb-6 flex justify-center'>
                         <div className='p-4 bg-emerald-100 rounded-full'>
                              <img
                                   src='https://smaunggulalfahd.sch.id/wp-content/uploads/2025/02/cropped-logo-sma-unggul-alfahd.png'
                                   alt=''
                                   className='w-12  text-emerald-600'
                              />
                         </div>
                    </div>

                    <h1 className='text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in'>
                         SMA Unggul
                         <span className='block text-emerald-600'>
                              Islam Al-Fahd
                         </span>
                    </h1>

                    <p className='text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in delay-300'>
                         Excellence in Islamic Education & Modern Learning
                    </p>

                    <p className='text-lg text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in delay-500'>
                         Nurturing young minds with Islamic values, academic
                         excellence, and character development for success in
                         this world and the hereafter.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700'>
                         <Button
                              size='lg'
                              className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105'
                         >
                              Explore Programs
                              <ArrowRight className='ml-2 w-5 h-5' />
                         </Button>
                         <Button
                              variant='outline'
                              size='lg'
                              className='border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300'
                         >
                              Schedule Visit
                         </Button>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
