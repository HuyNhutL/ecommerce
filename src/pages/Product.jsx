import products from "../assets/products.json";
import {Link, useParams} from 'react-router-dom';
import useCart from "../hooks/useCart.jsx";
import cartImg from "../assets/shopping-cart.png";

const Product = () => {
    const {product_id} = useParams();
    // Find the product with product_id
    const product = products.find(item => item.product_id === product_id);
    const {cart, addItem} = useCart();

    const handleAddItem = () => {
        addItem({
            product_id: product.product_id,
            product_name: product.product_name,
            product_image: product.product_image,
            product_price: product.product_price
        });

    };

    return (
        <div className={`min-h-screen relative`}>
            {product ? (
                <div>
                    <h2 className={`font-bold text-xl p-2`}>{product.product_name}</h2>
                    <div className='md:flex'>
                        <div className={`flex md:w-1/3`}>
                            <img src={product.product_image} alt={`image`} className='w-full'/>
                        </div>
                        <div className={`flex flex-col md:w-2/3 mx-2 justify-between `}>
                            <div className={`w-full text-xl`}>
                                <div>
                                    ID: {product.product_id}
                                </div>
                                <div>
                                    Category: {product.product_category}
                                </div>
                                <div>
                                    Remain: {product.amount}
                                </div>
                            </div>
                            <div className={`flex flex-col`}>
                                <p className={`font-bold text-xl`}>Price: ${product.product_price}</p>
                                <button onClick={handleAddItem} className={`p-5 bg-black text-white w-full`}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <hr/>
                    <h2 className={`text-3xl font-bold mx-2 p-2`}>Description</h2>
                    <hr/>
                    <div className={`m-2`}>
                        <p>{product.product_description}</p>
                    </div>

                </div>
            ) : (
                <p>Product not found</p>
            )}

            {
                cart.length > 0
                &&
                <Link to={`/cart`}
                      className="static fixed bottom-0 right-0 bg-gray-200 border rounded m-5 w-16 h-16 flex flex-col items-center justify-center">
                    <img src={cartImg} alt="Your Cart" className="rounded m-auto w-8 h-8"/>
                    <div className="absolute bottom-0 left-0 text-lg"><b>({cart.length})</b></div>
                </Link>
            }


        </div>
    );
};

export default Product;
