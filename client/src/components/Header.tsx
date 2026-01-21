import {useNavigate} from "react-router-dom"

const Header = () => {

	let navigate = useNavigate();

	const handleLogOut = () => {
		console.log("logged out");
		navigate("/login");
	}

	return (
		<div className= "w-full h-1/10 bg-sky-100 content-center p-4 pr-20">
			<div className="flex justify-end">
				<button
					className="border-solid rounded-lg bg-sky-800 p-2 text-white font-extrabold"
					onClick={handleLogOut}
				>
				Log Out
				</button>
			</div>
		</div>
	)
}


export default Header;
