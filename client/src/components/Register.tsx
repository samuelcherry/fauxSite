import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username] = useState("");
  const [email] = useState("");
  const [password] = useState("");

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
        username: username,
        password: password,
        email: email,
      }),
    });
    const data = await response.json();
    console.log("data: ", data);
    if (!response.ok) {
      console.log("in error: ", response);
      throw new Error("Failed to add user");
    }
    return response.json();
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
              className="bg-white p-2 m-2"
            />
            <input
              type="email"
              placeholder="email"
              className="bg-white p-2 m-2"
            />
            <input
              type="password"
              placeholder="password"
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
