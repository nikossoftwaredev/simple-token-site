"use client";
import Countdown from "@/components/Countdown";
import Image from "@/components/Image";
import { SectionTitle } from "@/components/SectionTitle";
import SocialsSection from "@/components/SocialsSection";
import Toast from "@/components/Toast";
import { PUMP_URL, TOKEN_ADDRESS, TOKEN_NAME } from "@/data/config";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-2 gap-4 bg-gradient-to-r from-base-300 to-base-100">
      {showAlert && <Toast title="Token address copied to clipboard" />}
      <SectionTitle title={TOKEN_NAME} />
      <Image src="/images/logo.png" alt="logo" />
      <a href={PUMP_URL} target="_blank" className="btn btn-accent">
        Buy on <img src="/images/pump.webp" />
      </a>
      <button
        className="col-span-2 btn btn-outline btn-accent m-1 text-xs"
        onClick={() => {
          setShowAlert(true);
          navigator.clipboard.writeText(TOKEN_ADDRESS);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        }}
      >
        <span className="hidden sm:block">
          <FaCopy />
        </span>
        {TOKEN_ADDRESS}
      </button>
      <h1 className="text-3xl font-bold">Trumps Birthday 🎉</h1>
      <Countdown />
      <SocialsSection />
    </main>
  );
}
