const Logo = () => {
  return (
    <div className="bg-gradient-to-r from-app-yellow via-app-green-200 to-app-green-300 py-20">
      <div className="container px-12">
        <h1 className="text-white text-lg text-center">
          Choose from a variety of global brands
        </h1>
        <div className="flex flex-grow justify-between items-center mt-10 h-16">
          <img className="w-28" src="/amazon.png" alt="amazon" />
          <img className="w-28" src="/nike.png" alt="nike" />
          <img className="w-28" src="/spotify.png" alt="spotify" />
          <img className="w-16" src="/starbucks.png" alt="starbucks" />
          <img className="w-16" src="/dominos.png" alt="dominos" />
          <img className="w-24" src="/swiggy.png" alt="swiggy" />
          <img className="w-20" src="/mcd.png" alt="mcd" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
