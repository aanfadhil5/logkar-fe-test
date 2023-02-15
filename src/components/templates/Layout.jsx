import Navbar from "../Navbar";

import React from "react";

export default function Layout({ children, title }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
