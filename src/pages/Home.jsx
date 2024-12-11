import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import UserReview from "../components/Home/UserReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-24">
                    <h1 className="my-20 text-2xl text-center font-bold">Featured Products</h1>
                    <FeaturedProducts></FeaturedProducts>
                </div>
                <div className="my-24">
                    <h1 className="my-20 text-2xl text-center font-bold">Featured Products</h1>
                    <UserReview></UserReview>
                </div>
                <div className="my-24">
                    <h1 className="my-20 text-2xl text-center font-bold">Frequently Asked Questions</h1>
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    );
};

export default Home;