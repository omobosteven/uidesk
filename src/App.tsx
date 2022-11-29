import React from "react";
import { Navbar } from "src/components/Navbar";
import { Banner } from "src/components/Banner";
import { Choose } from "src/components/Choose";
import { About } from "src/components/About";
import { Dishes } from "src/components/Dishes";

export const App = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<Choose />
			<About />
			<Dishes />
		</div>
	);
};
