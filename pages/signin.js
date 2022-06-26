import Image from "next/image";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cryptolearn from "../eth/cryptolearn";

const signin = () => {
  const [buttonText, setButtonText] = useState("Signup");
  const router = useRouter();

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert(
        "Metamask not detected. Please try again from a Metamask enabled browser."
      );
      return;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts[0]) {
      try {
        const tokens = await cryptolearn.methods.getTotalTokens().call({
          from: accounts[0],
        });

        if (tokens) {
          setCoins(tokens);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setButtonText("Login");
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert(
        "Metamask not detected. Please try again from a Metamask enabled browser."
      );
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected", accounts[0]);

    const isAUser = await cryptolearn.methods.isAUser().call({
      from: accounts[0],
    });

    console.log(isAUser);

    if (isAUser) {
      router.push("/events");
    } else if (!isAUser) {
      try {
        const response = await cryptolearn.methods.createUser().send({
          from: accounts[0],
        });

        if (response) {
          router.push("/events");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full blur-sm">
        <Image
          className=""
          src="/bg-hero.png"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          quality={100}
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-screen w-full bg-black/30"></div>
      <div className="h-screen container px-12 py-10 flex flex-col items-center z-10 relative">
        <div className="flex items-center">
          <img className="w-40" src="/logo-dark.png" alt="logo" />
        </div>
        <div className="flex flex-col justify-center items-center text-center flex-grow">
          <img className="max-w-xs" src="/signup.png" alt="signup" />
          <Button onClick={connectWallet} className="mt-16 px-10 py-3">
            {buttonText} with metamask
          </Button>
          <div
            className="text-white mt-6 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <span>Go back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
