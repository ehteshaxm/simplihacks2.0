const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="py-10 bg-app-green-400 text-white border-b-2 border-app-yellow">
      <div className="container px-12">
        <div className="flex justify-between items-center border-b border-white py-10">
          <div className="flex items-center">
            <img className="w-40" src="/logo-dark.png" alt="logo" />
          </div>
          <div className="">
            <ul className="flex gap-8 text-sm z-10 relative">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#work">How It Works</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <a href="#">
              <img className="w-4 h-4" src="/facebook.ico" alt="facebook" />
            </a>
            <a href="#">
              <img className="w-4 h-4" src="/instagram.png" alt="facebook" />
            </a>
            <a href="#">
              <img className="w-4 h-4" src="/twitter.ico" alt="facebook" />
            </a>
            <a href="#">
              <img className="w-4 h-4" src="/linkedin.ico" alt="facebook" />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <small>
            &copy; Copyright {year} - Earthcoin. All Rights Reserved.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
