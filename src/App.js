import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import BackToUp from "@uiw/react-back-to-top";
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='item/:itemId' element={<ItemDetails />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='checkout/success' element={<Confirmation />} />
				</Routes>
				<CartMenu />
				<Footer />
				<BackToUp
					style={{
						zIndex: "3",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					size={40}
				>
					{/* {<BiUpArrowCircle size={32} />} */}
					TOP
				</BackToUp>
			</BrowserRouter>
		</div>
	);
}

export default App;
