import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    password: "",
    error_desc: "",
  });
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: form.email,
      password: form.password,
    };
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setForm({
            ...form,
            error: true,
            error_desc: error.response.data.error,
          });
        }
      });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h1 className="font-bold text-2xl text-primer">Login</h1>

          <form className="flex flex-col gap-6">
            <input
              id="username"
              name="user"
              placeholder="Username"
              type="text"
              className="p-2 mt-8 rounded-xl border"
              onChange={inputChange}
              autoFocus
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
                autoComplete="on"
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
              onClick={handleSubmit}
              disabled={loading}
            >
              Login
            </button>
            <div>{loading ? <Loading /> : ""}</div>
            {form.error_list ? (
              <p className="text-red-500">Email / Kata Sandi salah.</p>
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
