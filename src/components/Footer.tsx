import React from 'react';
import Logo from '@/components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Logo variant="light" className="mb-6" />
          <p className="max-w-xs">
            Specialist solicitors dedicated to protecting your reputation and livelihood through expert defense strategies.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-makwana-light transition-colors">Fare Evasion</a></li>
            <li><a href="#" className="hover:text-makwana-light transition-colors">Blue Badge Fraud</a></li>
            <li><a href="#" className="hover:text-makwana-light transition-colors">Criminal Defense</a></li>
            <li><a href="#" className="hover:text-makwana-light transition-colors">Appeals</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-makwana-light transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-makwana-light transition-colors">Terms of Business</a></li>
            <li><a href="#" className="hover:text-makwana-light transition-colors">Complaints Procedure</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        © {new Date().getFullYear()} Makwana Solicitors. All rights reserved. Authorised and Regulated by the Solicitors Regulation Authority.
      </div>
    </footer>
  );
};

export default Footer;