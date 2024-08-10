import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Terms from "../../components/terms/Terms";
import { WithProtectedRoute } from "../../components/withAuth";

const ProtectedPage: React.FC = () => {
    return (
        <>
            <Header />
            <Terms />
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