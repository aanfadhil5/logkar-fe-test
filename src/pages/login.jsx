import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    password: "",
    error_desc: "",
  });

  const validateName = (name) => {
    if (name.length < 3 || name.length > 30) {
      setForm((prev) => ({ ...prev, error_desc: "Name is not valid" }));
      return false;
    } else {
      setForm((prev) => ({ ...prev, error_desc: "" }));
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 3 || password.length > 10) {
      setForm((prev) => ({ ...prev, error_desc: "Password is not valid" }));
      return false;
    } else if (!/[A-Z]/.test(password)) {
      setForm((prev) => ({
        ...prev,
        error_desc: "Password must include a capital letter",
      }));
      return false;
    } else {
      setForm((prev) => ({ ...prev, error_desc: "" }));
      return true;
    }
  };

  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "name") {
      validateName(e.target.value);
    } else if (e.target.name === "password") {
      validatePassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = form;

    sessionStorage.setItem("name", data.name);
    if (form.error_desc == "") {
      navigate("/home");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h1 className="font-bold text-2xl text-primer">Login</h1>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="p-2 mt-8 rounded-xl border"
              onChange={inputChange}
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type={visiblePassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={inputChange}
                required
              />
              <i
                className="absolute top-1/2 right-3 -translate-y-1/2 text-xl"
                onClick={() => {
                  setVisiblePassword((prev) => !prev);
                }}
              >
                {visiblePassword ? <Eye /> : <EyeOff />}
              </i>
            </div>
            <button
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
              disabled={loading}
            >
              Login
            </button>
            {form.error_desc ? (
              <p className="text-red-500">{form.error_desc}</p>
            ) : (
              ""
            )}
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl mx-auto"
            src="https://images.unsplash.com/photo-1594802996687-f352ce62175e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default login;
