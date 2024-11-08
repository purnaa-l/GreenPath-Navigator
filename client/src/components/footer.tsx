import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forestGreen text-lightSand py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-center text-lg font-semibold text-lightSand">
        © {new Date().getFullYear()} Green Path Navigator. All rights reserved.
        </div>
        <div className="flex space-x-6 text-lightSand">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 hover:text-leafGreen" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 hover:text-leafGreen" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-leafGreen" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-leafGreen" />
          </a>
        </div>
        <div className="text-center text-lightSand">
          <a href="/privacy" className="hover:text-leafGreen mx-2">Privacy Policy</a>|
          <a href="/terms" className="hover:text-leafGreen mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;