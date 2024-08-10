'use client'
import Contact from '../../components/contact/Contact';
import { WithProtectedRoute } from '../../components/withAuth';

const ProtectedPage: React.FC = () => {
    return (
        <div className='w-full bg-[#080525]'>
            <Contact />
        </div>
    );
  };

const Page = () => {
    return (
        <WithProtectedRoute>
            <ProtectedPage />
        </WithProtectedRoute>
    );
}

export default Page;
