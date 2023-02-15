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
        <div className="md:p-14 p-8 rounded-lg shadow-2xl bg-base-200 md:flex gap-12">
          <figure className="flex justify-center mb-12">
            <img
              src="https://static.ffx.io/images/$width_584/t_resize_width/q_86%2Cf_auto/a76c1590a4ab2ae7219ea36817a6e2dfd6a00c27"
              className="rounded-full w-48 h-48 object-cover"
              alt="avatar"
            />
          </figure>
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
