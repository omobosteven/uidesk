import React from "react";
import { Navbar } from "src/components/Navbar";
import { Banner } from "src/components/Banner";
import { Choose } from "src/components/Choose";
import { About } from "src/components/About";
import { Dishes } from "src/components/Dishes";
import { Clients } from "src/components/Clients";
import { Subscribe } from "src/components/Subscribe";
import { Footer } from "src/components/Footer";

export const App = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<Choose />
			<About />
			<Dishes />
			<Clients />
			<Subscribe />
			<Footer />
		</>
	);
};
