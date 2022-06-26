import Button from "../Button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center py-8">
      <div className="">
        <h1>Earthcoin</h1>
      </div>
      <div className="flex gap-12 items-center">
        <ul className="flex gap-8 font-medium z-10 relative">
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
        <Button className="px-6 py-2" onClick={() => router.push("/signin")}>
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
