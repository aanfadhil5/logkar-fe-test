import { useNavigate } from "react-router-dom";
const ErrorNotComplete = () => {
  const router = useNavigate();

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center flex-col">
      <div className="max-w-md flex flex-col gap-4 px-4">
        <p className="text-xl text-justify">
          Anda harus melengkapi data diri di halaman Home Sebelum dapat melihat
          barang yang tersedia
        </p>

        <button
          className="btn btn-accent"
          onClick={() => {
            router("/home");
          }}
        >
          kembali ke Home
        </button>
      </div>
    </div>
  );
};

export default ErrorNotComplete;
