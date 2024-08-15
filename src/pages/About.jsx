import {Link} from "react-router-dom";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import instagramImg from "../assets/instagram.png";

const About = () => {
    return (
        <div className={`min-h-screen`}>
            <h2 className={`m-2 text-3xl`}>About us</h2>
            <hr/>
            <p className={`mx-2 indent-5`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi delectus deserunt laudantium nulla
                reprehenderit. Ad aspernatur delectus labore perferendis porro quas saepe tempore. Alias animi
                doloremque id labore mollitia pariatur quas repellendus sapiente sunt voluptatibus! Aliquam architecto
                atque autem corporis cum deserunt dolor dolore dolorem doloremque eius eligendi eveniet expedita fuga in
                iusto molestias nesciunt omnis perferendis placeat praesentium quam quas quasi quidem quisquam
                repudiandae, sed temporibus, velit veniam vitae, voluptatem! Aliquam aliquid asperiores assumenda at
                consequuntur cumque explicabo, facere fugit minima nesciunt nobis praesentium suscipit ut! Aliquam
                doloremque magni neque optio sint? Ad autem eum hic nemo! Amet assumenda ipsum iure nihil tempora
                veritatis.
            </p>
            <p className={`mx-2 indent-5`}>
                Asperiores cum eveniet explicabo incidunt mollitia nam nesciunt obcaecati, optio perferendis
                quas. Accusamus asperiores atque autem beatae commodi cupiditate debitis dolorem error esse est
                excepturi expedita hic, illo in incidunt ipsam iure laboriosam laborum laudantium maxime minus, modi
                molestias, nihil obcaecati odit praesentium provident quasi recusandae rerum sit soluta tempore veniam
                vitae. Aliquid atque aut blanditiis consectetur deleniti earum facere ipsa, iusto minus mollitia
                nesciunt, nihil non qui quidem quisquam ratione reiciendis tempora ullam veritatis vero voluptas
                voluptatem voluptates. Aut autem culpa delectus deleniti dicta, dolorem error exercitationem id,
                incidunt nesciunt officiis pariatur, possimus quisquam recusandae reprehenderit saepe velit.
            </p>
            <p className={`mx-2 indent-5`}>
                Eum explicabo officiis quas quasi quibusdam reprehenderit sit voluptates voluptatum! Architecto at, cumque
                dolores eum ex itaque libero nesciunt, quae quas quia quidem quis quo sit. Animi, at facilis id in
                itaque laboriosam, magnam molestias, nam odio officia quisquam repudiandae sunt voluptate! Alias aliquam
                assumenda beatae consectetur consequuntur debitis dignissimos dolorum ducimus eaque excepturi explicabo
                iure laboriosam minima necessitatibus porro quas, quasi quia, quisquam reprehenderit rerum suscipit ut
                voluptatem. Accusamus, ad asperiores aut blanditiis consequatur, consequuntur dolor dolorum eaque eos
                est in laboriosam laborum nam odit possimus praesentium quo quod similique tenetur velit, veritatis
                voluptas!
            </p>
            <hr/>
            <h2 className={`m-2 text-3xl text-end`}>Contact</h2>
            <hr/>
            <div className={`flex justify-around items-center my-3`}>
                <Link to={`#`} className={`w-12 h-12`}><img src={twitterImg} alt="X"/></Link>
                <Link to={`#`} className={`w-12 h-12`}><img src={facebookImg} alt="Facebook"/></Link>
                <Link to={`#`} className={`w-12 h-12`}><img src={instagramImg} alt="Instagram"/></Link>
            </div>

        </div>
    );
};

export default About;
