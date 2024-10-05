import React from "react";

function Footer() {
  return (
    <>
      {/* Footer section start */}
      <div className="bg-[#205F83] text-white py-16">
        <div className="lg:mx-10 md:mx-6 px-4 sm:mx-auto mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {/* About Brogan Boots */}
          <div className="text-justify">
            <h3 className="text-2xl font-semibold mb-4">About Brogan Boots</h3>
            <p className="text-sm">
              Brogan Boots was built out of frustration to make trade-offs between clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced? And it is when I decided, there has to be another option.
            </p>
            <p className="text-sm mt-4">
              At Brogan Boots, we offer ridiculously high quality footwear designed, developed, and handcrafted in-house by skilled artisans, drawing inspiration from the world around us and our customers.
            </p>
          </div>

          {/* Our Category */}
          <div className="lg:ms-20">
            <h3 className="text-2xl font-semibold mb-4">Our Category</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Rugged</a></li>
              <li><a href="/about-us.html" className="hover:underline">Suede</a></li>
              <li><a href="/ourProducts.html" className="hover:underline">Chelsea</a></li>
              <li><a href="/globalPresence.html" className="hover:underline">Lace-up</a></li>
              <li><a href="/CYD.html" className="hover:underline">All Styles</a></li>
              <li><a href="/contactUs.html" className="hover:underline">Stomper</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="/about-us.html" className="hover:underline">Contact Us</a></li>
              <li><a href="/terms-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/cancel-policy" className="hover:underline">Cancellation Policy</a></li>
              <li><a href="/refund" className="hover:underline">Replacement & Refund Policy</a></li>
              <li><a href="/shipment-policy" className="hover:underline">Shipment Policy</a></li>
            </ul>
          </div>

          {/* Registered Business Address */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Registered Business Address</h3>
            <ul className="space-y-2">
              <li><a href="https://maps.app.goo.gl/rre5G1zuKzgNTFs67" target="_blank" className="hover:underline">663-B, Pocket-B, DDA Flats, Hari Nagar, Near Tilak Nagar Metro Station, New Delhi – 110064</a></li>
              <li><a href="tel:+917611189837" className="hover:underline">+91 76111 89837</a></li>
              <li><a href="mailto:broganboots19@gmail.com" className="hover:underline">broganboots19@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="bg-black py-4">
        <div className="container mx-auto flex justify-between items-center text-white px-4">
          <span>&#169; 2024, Brogan Boots, All rights reserved</span>
          <span>Developed by: SSS Technology</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
