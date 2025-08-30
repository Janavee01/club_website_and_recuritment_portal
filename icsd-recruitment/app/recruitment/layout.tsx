import Header from "@/components/Header";
import React from "react";

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-container">
      <Header />
      {children}
    </div>
  );
}
