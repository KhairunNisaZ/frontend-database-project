import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Admin from './routes/Admin';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/admin'
					Component={Admin}
				/>
			</Routes>
		</Router>
	);
}
