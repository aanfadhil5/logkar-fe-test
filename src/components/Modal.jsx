import { useState } from "react";

const Modal = ({ close, data, onSubmit }) => {
  const [modalData, setModalData] = useState({ ...data });
  const [error, setError] = useState("");

  const validatePhone = (phone) => {
    if (phone.length < 10 || phone.length > 13) {
      setError("Phone number must min 10 digit and max 13 digit");
      return false;
    } else if (!/^[0-9]*$/.test(phone)) {
      setError("Phone number must be numeric");
      return false;
    } else if (phone[0] === "0") {
      setError("Phone number cannot start with 0");
      return false;
    } else {
      setError("");
      return true;
    }
  };
  const handleChange = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
    if (e.target.name === "telepon") {
      validatePhone(e.target.value);
    }
    if (
      e.target.name === "name" ||
      e.target.name === "email" ||
      e.target.name === "telepon" ||
      e.target.name === "address"
    ) {
      if (e.target.value === "") {
        setError(e.target.name + " is required");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(modalData);
  };

  return (
    <>
      <div className="fixed inset-y-auto inset-x-0 z-50 w-full mx-auto max-w-3xl rounded-lg">
        <div className="flex flex-col">
          <div className="flex p-5 bg-blue-500">
            <h3 className="text-xl font-semibold text-white">Edit Identitas</h3>
            <button
              className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={close}
            >
              <span className="text-white h-6 w-6 text-xl block">X</span>
            </button>
          </div>
          <div className="bg-gray-50">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 p-4">
                <input
                  name="name"
                  defaultValue={modalData.name || ""}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Masukkan email anda"
                  onChange={handleChange}
                  required
                />

                <input
                  name="email"
                  defaultValue={modalData.email || ""}
                  placeholder="Masukkan email anda"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  type="email"
                  onChange={handleChange}
                  required
                />

                <input
                  name="telepon"
                  defaultValue={modalData.telepon || ""}
                  placeholder="Masukkan nomor telepon"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  required
                  type="number"
                  onChange={handleChange}
                />

                <input
                  name="address"
                  defaultValue={modalData.address || ""}
                  placeholder="Masukkan alamat lengkap"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                  required
                  onChange={handleChange}
                />
              </div>
              <p>{error ? `${error}` : null}</p>

              <div className="p-2 sm:p-4 flex justify-end">
                <button
                  className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none "
                  type="button"
                  onClick={close}
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 text-white bg-blue-600 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-700"
                  disabled={error ? true : false}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
