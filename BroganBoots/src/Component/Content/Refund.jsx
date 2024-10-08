import React from 'react';

export const Refund = () => {
    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-20 my-10">
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 text-center mb-4 md:mb-5">Refund & Returns Policy</h4>

                <div className="mb-8">
                    <h6 className="text-xl font-semibold text-gray-800 mb-4">Returns</h6>
                    <p className="text-gray-600">
                        Brogan Boots cannot accept returns after the order is successfully placed and payment is made by the buyer.
                    </p>
                </div>

                <div>
                    <h6 className="text-xl font-semibold text-gray-800 mb-4">Refund</h6>
                    <p className="text-gray-600">
                        Brogan Boots cannot accept refund requests after the order is successfully placed and payment is made by the buyer.
                    </p>
                </div>
            </div>
        </div>
    );
};
