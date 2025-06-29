import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Facilities from '@/components/Facilities';

const FacilitiesPage = () => {
     return (
          <div className='min-h-screen'>
               <div className='pt-16'>
                    <Facilities />
               </div>
               <Footer />
          </div>
     );
};

export default FacilitiesPage;
