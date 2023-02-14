import React from "react";

const ErrorNotComplete = () => {
  return (
    <div>
      <p>
        Anda harus melengapi data diri di halaman Home Sebelum dapat melihat
        barang yang tersedia
      </p>
      <a href="/home">
        <button className="p-2 rounded bg-blue-200">kembali ke Home</button>
      </a>
    </div>
  );
};

export default ErrorNotComplete;
