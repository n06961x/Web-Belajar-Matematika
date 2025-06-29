import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Facilities from '@/components/Facilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
     return (
          <div className='min-h-screen'>
               <Hero />
               <About />
               <Programs />
               <Facilities />
               <Contact />
               <Footer />
          </div>
     );
};

export default Index;
