const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">Tastytails Foods</p>
          <p className="text-sm text-gray-400">Delivering tasty foods, right at your doorstep</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact</a>
            <a href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</a>
          </div>
  
          <p className="text-sm text-gray-400 mt-6">&copy; {new Date().getFullYear()} Tastytails Foods. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  