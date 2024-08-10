'use client'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MyAccount from "../../components/myAccount/MyAccount";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <MyAccount />
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