import Header from './Header'
import MainContent from './MainContent'

const Home = () => {
	return (
		<>
			<div className="flex flex-col bg-sky-50">
				<Header/>
				<MainContent/>
			</div>
		</>
	);
};
export default Home
