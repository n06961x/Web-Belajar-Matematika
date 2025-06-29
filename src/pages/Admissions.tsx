import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Calendar, Users } from 'lucide-react';

const Admissions = () => {
     const requirements = [
          'Completed application form',
          'Academic transcripts',
          'Character reference letter',
          'Interview with admissions team',
          'Health records',
          'Previous school reports',
     ];

     const steps = [
          {
               icon: FileText,
               title: 'Submit Application',
               description:
                    'Complete and submit the online application form with required documents',
          },
          {
               icon: Calendar,
               title: 'Schedule Interview',
               description:
                    'Attend an interview with our admissions team and tour the campus',
          },
          {
               icon: CheckCircle,
               title: 'Review Process',
               description:
                    'Our team reviews your application and makes admission decisions',
          },
          {
               icon: Users,
               title: 'Welcome to NIHS',
               description:
                    'Join our Islamic community and begin your educational journey',
          },
     ];

     return (
          <div className='min-h-screen'>
               <div className='pt-16'>
                    {/* Hero Section */}
                    <section className='py-20 bg-gradient-to-br from-emerald-50 to-white'>
                         <div className='max-w-7xl mx-auto px-6 text-center'>
                              <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>
                                   Join Our Islamic Community
                              </h1>
                              <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
                                   Begin your journey of Islamic education and
                                   academic excellence at Nur Islamic High
                                   School
                              </p>
                              <Button
                                   size='lg'
                                   className='bg-emerald-600 hover:bg-emerald-700 text-white'
                              >
                                   Start Application
                              </Button>
                         </div>
                    </section>

                    {/* Admission Process */}
                    <section className='py-20 bg-white'>
                         <div className='max-w-7xl mx-auto px-6'>
                              <div className='text-center mb-16'>
                                   <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                                        Admission Process
                                   </h2>
                                   <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                                        Our simple and straightforward admission
                                        process ensures we find the right fit
                                        for every student
                                   </p>
                              </div>

                              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                                   {steps.map((step, index) => (
                                        <Card
                                             key={index}
                                             className='text-center hover:shadow-lg transition-shadow duration-300'
                                        >
                                             <CardHeader>
                                                  <div className='flex justify-center mb-4'>
                                                       <div className='p-4 bg-emerald-100 rounded-full'>
                                                            <step.icon className='w-8 h-8 text-emerald-600' />
                                                       </div>
                                                  </div>
                                                  <CardTitle className='text-xl'>
                                                       {step.title}
                                                  </CardTitle>
                                             </CardHeader>
                                             <CardContent>
                                                  <p className='text-gray-600'>
                                                       {step.description}
                                                  </p>
                                             </CardContent>
                                        </Card>
                                   ))}
                              </div>
                         </div>
                    </section>

                    {/* Requirements */}
                    <section className='py-20 bg-gray-50'>
                         <div className='max-w-7xl mx-auto px-6'>
                              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                                   <div>
                                        <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                                             Admission Requirements
                                        </h2>
                                        <p className='text-xl text-gray-600 mb-8'>
                                             We welcome students who are
                                             committed to Islamic values and
                                             academic excellence
                                        </p>
                                        <ul className='space-y-4'>
                                             {requirements.map(
                                                  (requirement, index) => (
                                                       <li
                                                            key={index}
                                                            className='flex items-center space-x-3'
                                                       >
                                                            <CheckCircle className='w-5 h-5 text-emerald-600 flex-shrink-0' />
                                                            <span className='text-gray-700'>
                                                                 {requirement}
                                                            </span>
                                                       </li>
                                                  )
                                             )}
                                        </ul>
                                   </div>
                                   <div className='bg-white p-8 rounded-2xl shadow-lg'>
                                        <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                                             Ready to Apply?
                                        </h3>
                                        <p className='text-gray-600 mb-6'>
                                             Start your application today and
                                             join our community of learners
                                             dedicated to Islamic education and
                                             academic success.
                                        </p>
                                        <Button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white mb-4'>
                                             Begin Application
                                        </Button>
                                        <Button
                                             variant='outline'
                                             className='w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                                        >
                                             Schedule Campus Visit
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
               <Footer />
          </div>
     );
};

export default Admissions;
