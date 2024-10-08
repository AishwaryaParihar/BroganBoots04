import React from 'react';

export const CancelProces = () => {
  return (
    <div className="container px-4 md:px-10 lg:px-20 my-10">
      <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 text-center mb-4 md:mb-5">
          Cancellation Policies
        </h4>
        <div className="space-y-4 md:space-y-6 text-gray-700">
          <p className="leading-relaxed text-sm md:text-base lg:text-lg">
            You cannot cancel the order and demand a refund once the order is successfully placed and processed by the payment gateway. Refund requests will only be considered in the following cases, and refunds will be in the form of store credit:
          </p>
          <ul className="list-disc list-inside ml-4 md:ml-8">
            <li>If the buyer does not receive the ordered products within 45 days and Brogan Boots fails to ship the ordered products.</li>
            <li>If the shipping location is not serviced by our partner courier companies.</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base lg:text-lg">
            No refund requests will be entertained for damaged products. Damaged products will be exchanged as per our exchange policy.
          </p>
          <p className="leading-relaxed text-sm md:text-base lg:text-lg">
            No returns will be entertained if a customer wants to return the product because they don't like it after delivery or feel it doesn't match their expectations. No refunds will be given in the following cases:
          </p>
          <ul className="list-disc list-inside ml-4 md:ml-8">
            <li>Incorrect or insufficient address provided by the customer.</li>
            <li>Non-availability of recipient at the mentioned address.</li>
            <li>Refusal to accept products.</li>
            <li>Delivered at a location or to a person specified by the customer other than themselves.</li>
            <li>Force majeure events.</li>
            <li>In case of tampering with the product by the customer.</li>
          </ul>
          <p className="leading-relaxed text-sm md:text-base lg:text-lg">
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
