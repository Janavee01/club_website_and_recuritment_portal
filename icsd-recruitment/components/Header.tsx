"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CLUB_INFO } from "@/lib/constants";

export default function Header() {
  const handleLogoClick = () => {
    window.open(
      "https://site-fu5n1mj73-janavee01s-projects.vercel.app",
      "_blank"
    );
  };

  return (
    <header className="header-container glass-header" style={{ height: "80px" }}>
      <div
        className="header-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 1rem",
        }}
      >
        <div
          className="logo-wrapper"
          onClick={handleLogoClick}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <Image
            src="/images/icsd-logo.png"
            alt={`${CLUB_INFO.name} Logo`}
            width={70}
            height={70}
            className="rounded-lg"
          />
        </div>

        <div className="header-buttons">
          <Button
            className="btn-secondary"
            onClick={() =>
              window.open(
                "https://site-fu5n1mj73-janavee01s-projects.vercel.app",
                "_blank"
              )
            }
          >
            Visit Us
          </Button>
        </div>
      </div>

      <style jsx>{`
        .logo-wrapper {
          transition: transform 0.3s ease;
        }
        .logo-wrapper:hover {
          transform: scale(1.15);
        }
      `}</style>
    </header>
  );
}
