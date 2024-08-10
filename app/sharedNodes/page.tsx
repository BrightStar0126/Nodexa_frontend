'use client'
import { WithProtectedRoute } from "../../components/withAuth";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SharedNode from "../../components/sharedNodes/SharedNodes";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <SharedNode />
            <Footer />
        </>
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