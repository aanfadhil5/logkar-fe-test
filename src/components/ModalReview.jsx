import { useSelector, useDispatch } from "react-redux";
import { order } from "../store/cartSlice";
import Swal from "sweetalert2";

const ModalReview = ({ close }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className="fixed inset-y-auto inset-x-0 z-50 w-full mx-auto max-w-3xl rounded-lg">
        <div className="flex flex-col">
          <div className="flex p-5 bg-accent-focus">
            <h3 className="text-xl font-semibold text-white">
              Purchasing List
            </h3>
            <button
              className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={close}
            >
              <span className="text-white text-xl block">X</span>
            </button>
          </div>
          <div className="bg-[#2A303C] w-full">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    ))
                  ) : (
                    <p>NODAatta</p>
                  )}
                </tbody>
              </table>
              <div className="flex items-center justify-center my-6">
                <button
                  className="btn btn-accent"
                  onClick={() => {
                    dispatch(order());
                    Swal.fire({
                      icon: "success",
                      title: "Yeay, Order success",
                    });
                    close();
                  }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalReview;
