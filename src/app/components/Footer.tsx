import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section */}
        <div className='mx-16'>
          <h2 className="text-3xl font-bold">MegaMart</h2>
          <div className="mt-5">
            <p className="flex items-center justify-center md:justify-start">
              <i className="fab fa-whatsapp mr-2"></i> Whats App <br /> +1 202-918-2132
            </p>
            <p className="mt-3 flex items-center justify-center md:justify-start">
              <i className="fas fa-phone mr-2"></i> Call Us <br /> +1 202-918-2132
            </p>
          </div>
          <div className="mt-5">
            <p>Download App</p>
            <div className="flex justify-center md:justify-start mt-3 space-x-2">
              <img
                src="/app.png"
                alt="App Store"
                className="h-10"
              />
              <img
                src="/playstore.png"
                alt="Google Play"
                className="h-10"
              />
            </div>
          </div>
        </div>
        
        {/* Middle Section */}
        <div>
          <h4 className="text-lg font-semibold border-b-2 border-white inline-block">Most Popular Categories</h4>
          <ul className="mt-5 space-y-2">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-lg font-semibold border-b-2 border-white inline-block">Customer Services</h4>
          <ul className="mt-5 space-y-2">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        © 2024 All rights reserved. Tahirah Roohi.
      </div>
    </footer>
  );
};

export default Footer;
