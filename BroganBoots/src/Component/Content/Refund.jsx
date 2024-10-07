import React from 'react'

export const Refund = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center">
                    <h6 className="text-xl font-semibold text-gray-800 mb-4">Returns</h6>
                    <p className="text-gray-600 mb-6">
                        Brogan Boots cannot accept returns after the order is successfully placed and payment is made by the buyer.
                    </p>

                    <h6 className="text-xl font-semibold text-gray-800 mb-4">Refund</h6>
                    <p className="text-gray-600">
                        Brogan Boots cannot accept refund requests after the order is successfully placed and payment is made by the buyer.
                    </p>
                </div>
            </div>
        </div>
    )
}
