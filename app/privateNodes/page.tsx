import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PrivateNodes from "../../components/privateNodes/PrivateNodes";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <PrivateNodes />
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