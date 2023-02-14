import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingPage from "./components/loading/LoadingPage";
import PrivateRoutes from "./routes/PrivateRoutes";

const Home = lazy(() => import("./pages/home"));
const Store = lazy(() => import("./pages/store"));
const Cart = lazy(() => import("./pages/cart"));

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
