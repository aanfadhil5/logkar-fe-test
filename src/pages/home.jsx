import { useState, useCallback } from "react";
import Layout from "../components/templates/Layout";
import Modal from "../components/Modal";

const Home = () => {
  const nama = sessionStorage.getItem("name") || "";
  const email = sessionStorage.getItem("email") || "";
  const telepon = sessionStorage.getItem("telepon") || "";
  const address = sessionStorage.getItem("address") || "";
  const [data, setData] = useState({
    name: nama,
    email: email,
    telepon: telepon,
    address: address,
  });
  const [viewModal, setViewModal] = useState(false);

  const closeModal = useCallback(() => {
    setViewModal(false);
  }, [setViewModal]);

  const handleSubmit = ({ name, email, telepon, address }) => {
    setData({ name, email, telepon, address });
    closeModal();
    try {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("telepon", telepon);
      sessionStorage.setItem("address", address);
    } catch (error) {
      console.error("Error saving data to sessionStorage", error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen mx-auto flex items-center justify-center">
        <div className="">
          <div className="max-w-md flex flex-col gap-4 text-xl">
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Telepon: +62{data.telepon}</p>
            <p>Alamat: {data.address}</p>
            <button
              className="btn btn-accent"
              onClick={() => {
                setViewModal(true);
              }}
            >
              {data.name && data.email && data.telepon && data.address
                ? "Ubah data diri anda"
                : "Lengkapi data diri Anda"}
            </button>
          </div>
        </div>
        {viewModal && (
          <Modal data={data} close={closeModal} onSubmit={handleSubmit} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
