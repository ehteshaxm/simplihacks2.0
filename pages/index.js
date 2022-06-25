import React from "react";
import web3 from "../eth/web3";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import app from "../firebase/clientApp";

//Ui imports
import Hero from "../components/landing/Hero";
import Work from "../components/landing/Work";
import Logo from "../components/landing/Logo";
import Why from "../components/landing/Why";
import Cta from "../components/landing/Cta";
import Footer from "../components/landing/Footer";

export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "coupons"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  if (value) {
    console.log(JSON.stringify(value.docs[0].data()));
  }

  return (
    <>
      <Hero />
      <Work />
      <Logo />
      <Why />
      <Cta />
      <Footer />
    </>
  );
}
