import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';

const ProgramsPage = () => {
     return (
          <div className='min-h-screen'>
               <div className='pt-16'>
                    <Programs />
               </div>
               <Footer />
          </div>
     );
};

export default ProgramsPage;
