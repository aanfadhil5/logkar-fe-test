import Layout from "../components/templates/Layout";
import ErrorNotComplete from "../components/ErrorNotComplete";
import CartPages from "../components/CartPages";

const cart = () => {
  const nama = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");
  const telepon = sessionStorage.getItem("telepon");
  const address = sessionStorage.getItem("address");

  if (nama && email && telepon && address) {
    return (
      <Layout>
        <CartPages />
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

export default cart;
