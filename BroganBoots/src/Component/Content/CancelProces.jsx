import React from 'react';

export const CancelProces = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cancellation Policies</h4>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            You cannot cancel the order and demand a refund once the order is successfully placed and processed by the payment gateway. Refund requests will only be considered in the following cases, and refunds will be in the form of store credit:
          </p>
          <ul className="list-disc list-inside ml-8">
            <li>If the buyer does not receive the ordered products within 45 days and Brogan Boots fails to ship the ordered products.</li>
            <li>If the shipping location is not serviced by our partner courier companies.</li>
          </ul>
          <p className="leading-relaxed">
            No refund requests will be entertained for damaged products. Damaged products will be exchanged as per our exchange policy.
          </p>
          <p className="leading-relaxed">
            No returns will be entertained if a customer wants to return the product because they don't like it after delivery or feel it doesn't match their expectations. No refunds will be given in the following cases:
          </p>
          <ul className="list-disc list-inside ml-8">
            <li>Incorrect or insufficient address provided by the customer.</li>
            <li>Non-availability of recipient at the mentioned address.</li>
            <li>Refusal to accept products.</li>
            <li>Delivered at a location or to a person specified by the customer other than themselves.</li>
            <li>Force majeure events.</li>
            <li>In case of tampering with the product by the customer.</li>
          </ul>
          <p className="leading-relaxed">
            For any queries regarding refunds, please contact us via email:
          </p>
          <ul className="list-none ml-0">
            <li>
              <a href="mailto:broganboots19@gmail.com" className="text-blue-600 hover:underline">
                broganboots19@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:broganboots@gmail.com" className="text-blue-600 hover:underline">
                broganboots@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
