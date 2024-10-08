import React, { useContext } from 'react';
import displayINRCurrency from '../../helper/displayCurrency';
import addToCart from '../../helper/addToCart';
import { Link } from 'react-router-dom';
import Context from '../../context/index';
import { FaRupeeSign } from 'react-icons/fa';

const ProductCard = ({ loading, data = [] }) => {
    const loadingList = new Array(13).fill(null);
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    return (
        <div className='flex flex-wrap -mx-2'>
            {
                loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className="w-full md:w-1/3 px-2 mb-4">
                            <div className="border-0 rounded shadow-lg">
                                <div className="text-center p-4">
                                    Loading...
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <div key={index} className="w-full md:w-1/3 px-2 mb-4">
                            <div className="border-0 rounded shadow-lg h-full flex flex-col">
                                <Link to={"product/" + product?._id} className="block flex-grow">
                                    <div className="relative flex-grow">
                                        <div className="bestpick-box">
                                            <img
                                                src={product?.productImage[0]}
                                                alt={product?.productName}
                                                className="bestpick h-72 w-full object-cover"
                                            />
                                        </div>
                                        {product?.sale && (
                                            <span className="absolute top-0 right-0 bg-yellow-400 text-black uppercase px-2 py-1 rounded-l-none">
                                                Sale
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-2 flex flex-col justify-between">
                                        <h5 className="font-bold">{product?.productName}</h5>
                                        <div className="pt-2"></div>
                                        <div className="star-rating">
                                            {Array.from({ length: 5 }, (v, i) => (
                                                <i
                                                    key={i}
                                                    className={`fas fa-star text-yellow-500 ${product?.rating > i ? "checked" : ""}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-primary text-lg py-2">
                                            <del className="text-gray-500">
                                                {displayINRCurrency(product?.price)}
                                            </del>
                                            {"  "}From
                                            {displayINRCurrency(product?.sellingPrice)}
                                        </p>
                                        <button className="w-full bg-[#205F83] hover:bg-[#2087c2] text-white rounded py-2 uppercase" onClick={(e) => handleAddToCart(e, product?._id)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default ProductCard;
