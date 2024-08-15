import Carousel from "../components/Carousel";
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';
import {Link} from "react-router-dom";

const Home = () => {
    const images = [
        c1,
        c2,
        c3,
    ];

    return (
        <div className={`min-h-screen`}>
            <Carousel images={images}/>
            <br/>
            <hr/>
            <h1 className={`text-3xl py-2 ms-2`}>About us</h1>
            <hr/>
            <div className={`mx-2`}>
                <p className={`indent-5 first-letter:px-2 first-letter:text-red-400 first-letter:text-bold first-letter:text-6xl`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facilis nihil nostrum perferendis sed
                    suscipit tempora temporibus ullam vero! Autem consectetur debitis dolor dolore doloremque enim
                    explicabo iste iure minus natus nihil non provident quibusdam sapiente, sunt. Ab adipisci amet
                    asperiores, aut beatae consectetur delectus deleniti doloremque eius eligendi enim, error et, eum
                    expedita facere facilis fugit hic ipsa ipsum iure magni maxime odio officiis pariatur perferendis
                    porro quam quibusdam quos reiciendis repellat sunt totam voluptate voluptatum! Eos nobis, tenetur?
                </p>
                <div className={`text-end mx-2`}>
                    <Link to={`/about`} className={`text-blue-500`}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
