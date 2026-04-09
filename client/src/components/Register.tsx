import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  let navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.log("Error response:", text);
      throw new Error("Failed to add user");
    }
    const data = await response.json();
    navigate("/login");
    return data;
  };

  return (
    <>
      <div className="flex pt-30 pb-30 bg-sky-200 m-4 p-4 rounded-lg flex-1 justify-center">
        {/*form container*/}
        <form
          className="bg-sky-500 justify-center rounded-md"
          onSubmit={handleRegister}
        >
          {/* form */}
          <div className="flex flex-col">
            {" "}
            {/* input section */}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-white p-2 m-2"
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white p-2 m-2"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white p-2 m-2"
            />
          </div>
          <div className="flex justify-end m-2">
            {" "}
            {/* button section */}
            <button type="submit" className="bg-white p-2 m-2 rounded-lg">
              Register
            </button>
            <button
              onClick={handleBack}
              className="bg-white p-2 m-2 rounded-lg"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
