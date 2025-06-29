import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
     return (
          <div className='min-h-screen'>
               <div className='pt-16'>
                    <About />
               </div>
               <Footer />
          </div>
     );
};

export default AboutPage;
