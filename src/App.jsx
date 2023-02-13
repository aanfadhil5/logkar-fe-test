import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingPage from "./components/loading/LoadingPage";

const Home = lazy(() => import("./pages/home"));
const Store = lazy(() => import("./pages/store"));
const Cart = lazy(() => import("./pages/cart"));

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
