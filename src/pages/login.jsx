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
      setForm((prev) => ({
        ...prev,
        error_desc: "Name must be min 3 char max 30 char",
      }));
      return false;
    } else {
      setForm((prev) => ({ ...prev, error_desc: "" }));
      return true;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 3 || password.length > 10) {
      setForm((prev) => ({
        ...prev,
        error_desc: "Password must be min 3 char max 10 char",
      }));
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
    }
    if (e.target.name === "password") {
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
    <section className="hero min-h-screen">
      <div className=" hero-content flex rounded-2xl shadow-xl max-w-5xl p-8 items-center bg-base-200">
        <div className="md:w-3/4 px-4 md:px-16">
          <form
            className="form-control w-full max-w-xs gap-8 "
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={inputChange}
              required
            />
            <div className="relative">
              <input
                type={visiblePassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered input-accent w-full max-w-xs"
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
              className="btn btn-accent hover:scale-105 duration-300 disabled:cursor-not-allowed"
              type="submit"
              disabled={form.error_desc}
            >
              Login
            </button>
            <div className="flex justify-center mx-auto w-full max-w-xs">
              {form.error_desc ? (
                <p className="text-red-500">{form.error_desc}</p>
              ) : null}
            </div>
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
