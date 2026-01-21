import { useNavigate } from 'react-router';

const Login = () => {

	let navigate = useNavigate();

	const handleLogin = (e) =>{
		e.preventDefault();
		console.log("Logged In");
		navigate("/");
	}

	const handleRegister = (e) => {
		e.preventDefault();
		navigate("/register");
	}

	return (
		<>
			<div className="flex pt-30 pb-30 bg-sky-200 m-4 p-4 rounded-lg flex-1 justify-center">{/*form container*/}
				<div className="bg-sky-500 justify-center rounded-md">{/* form */}
					<div className="flex flex-col"> {/* input section */}
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
					<div className="flex justify-end m-2"> {/* button section */}
						<button
							onClick={handleLogin}
							className="bg-white p-2 m-2 rounded-lg"
						>
						Login
						</button>
						<button
							onClick={handleRegister}
							className="bg-white p-2 m-2 rounded-lg"
						>Register</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
