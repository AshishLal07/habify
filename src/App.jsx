// import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/home';
import './style.scss';
function App() {
	return (
		<>
			<BrowserRouter>
				<div className="app">
					<div className="container">
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route path="/" element={<Home />}></Route>
							</Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="/login" element={<Login />}></Route>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
