"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CLUB_INFO } from "@/lib/constants";

export default function Header() {
  return (
    <header className="header-container glass-header" style={{ height: '80px' }}>
      <div
        className="header-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0 1rem', // adjust side padding if needed
        }}
      >
        <div className="logo-section" style={{ display: 'flex', alignItems: 'center' }}>
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
                "https://icsdvitchennai.github.io/ICSD-Vit-Chennai/",
                "_blank"
              )
            }
          >
            Visit Us
          </Button>
        </div>
      </div>
    </header>
  );
}
