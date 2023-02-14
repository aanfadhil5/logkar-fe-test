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
      <div>
        <p>Name: {data.name}</p>
        <p>Email:{data.email}</p>
        <p>Telepon:{data.telepon}</p>
        <p>Alamat:{data.address}</p>
        <button
          className="p-4 bg-blue-500 border rounded"
          onClick={() => {
            setViewModal(true);
          }}
        >
          Lengkapi data diri Anda
        </button>
        {viewModal && (
          <Modal data={data} close={closeModal} onSubmit={handleSubmit} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
