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
          <div className="flex p-5 bg-accent-focus">
            <h3 className="text-xl font-semibold text-white">Edit Identitas</h3>
            <button
              className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={close}
            >
              <span className="text-white h-6 w-6 text-xl block">X</span>
            </button>
          </div>
          <div className="bg-[#2A303C]">
            <form onSubmit={handleSubmit} className="form-control">
              <div className="p-4">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  defaultValue={modalData.name || ""}
                  className="input input-bordered input-accent w-full"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                  <input
                    name="email"
                    defaultValue={modalData.email || ""}
                    placeholder="email@email.com"
                    className="input input-bordered input-accent w-full"
                    type="email"
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <label className="input-group">
                  <span>+62</span>
                  <input
                    name="telepon"
                    defaultValue={modalData.telepon || ""}
                    placeholder="823141423"
                    className="input input-bordered input-accent w-full"
                    required
                    type="number"
                    onChange={handleChange}
                  />
                </label>
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <textarea
                  name="address"
                  defaultValue={modalData.address || ""}
                  placeholder="123 Street"
                  className="textarea input-bordered input-accent w-full"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <p className="text-warning">{error ? `${error}` : null}</p>

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
                  className="btn btn-accent disabled:btn-disabled"
                  disabled={error ? true : false}
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
