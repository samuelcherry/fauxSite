import { useNavigate } from "react-router-dom"

const Register = () => {

	let navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault()
		navigate("/login")
	}

	const handleRegister = (e) => {
		e.preventDefault()
		navigate("/login")
		console.log("REGISTER")
	}

	return(
		<>
			<div className="flex pt-30 pb-30 bg-sky-200 m-4 p-4 rounded-lg flex-1 justify-center">{/*form container*/}
				<form className="bg-sky-500 justify-center rounded-md"onSubmit={handleRegister}>{/* form */}
					<div className="flex flex-col"> {/* input section */}
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
					<div className="flex justify-end m-2"> {/* button section */}
						<button
							type="submit"
							className="bg-white p-2 m-2 rounded-lg"
						>
						Register
						</button>
						<button
							onClick={handleLogin}
							className="bg-white p-2 m-2 rounded-lg"
						>Back</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Register
