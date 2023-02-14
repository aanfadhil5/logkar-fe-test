import Layout from "../components/templates/Layout";
import ErrorNotComplete from "../components/ErrorNotComplete";
import StorePages from "../components/StorePages";

const store = () => {
  const nama = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");
  const telepon = sessionStorage.getItem("telepon");
  const address = sessionStorage.getItem("address");

  if (nama && email && telepon && address) {
    return (
      <Layout>
        <StorePages />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <ErrorNotComplete />
      </Layout>
    );
  }
};

export default store;
