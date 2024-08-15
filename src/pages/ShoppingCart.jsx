import useCart from "../hooks/useCart.jsx";
import Modal from "../components/Modal.jsx";
import {useState} from "react";

const ShoppingCart = () => {
    const {cart, removeItem, clearCart} = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={`min-h-screen`}>
            <h1>Cart</h1>
            <p>This is your cart</p>
            <table className={'w-full'}>
                <thead>
                <tr className={`bg-green-500`}>
                    <th className={`w-3/5 text-center text-white`}>Product</th>
                    <th className={`w-1/5 text-end text-white`}>Price</th>
                    <th className={`w-1/5 text-center`}></th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => (
                    <tr key={item.product_id} className={`odd:bg-gray-200 hover:bg-green-300`}>
                        <td className={`w-3/5 p-2 flex`}>
                            <img src={item.product_image} alt="image" className={'w-1/3'}/>
                            {item.product_name}
                        </td>
                        <td className={`w-1/5 p-2 text-end`}>${item.product_price}</td>
                        <td className={`w-1/5 p-2 text-end`}>
                            <button className={`bg-red-500 text-white p-2 rounded`}
                                    onClick={() => removeItem(index)}>Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {cart.length > 0 && (
                <div>
                    <i className={`opacity-50`}>
                        {`${cart.length} product(s) total in cart`}
                    </i>
                    <br/>
                    <div className={`flex justify-end me-2 mb-2`}>
                        <button className={`bg-red-500 text-white p-2 rounded`} onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            )}

            <div className={`w-full flex justify-center items-center`}>
                <button
                    onClick={openModal}
                    className={`w-full bg-green-500 p-2 text-white text-lg font-bolds text-center hover:bg-green-700`}>Order
                </button>
            </div>


            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-semibold mb-4">Are you sure want to order these items?</h2>
                <p className="mb-4">Make sure to check if everything is correct.</p>
                <button
                    onClick={closeModal}
                    className="w-full bg-green-500 text-white p-2 mb-2"
                >
                    Order
                </button>
                <button
                    onClick={closeModal}
                    className="w-full bg-red-500 text-white p-2"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default ShoppingCart;
