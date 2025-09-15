import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/About";
import Footer from "../components/common/Footer";
import { SERVICES } from "../config/services";
import Contact from "../components/sections/Contact";

const UnityHomeCare = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeService, setActiveService] = useState(0);
	console.log(activeService);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveService((prev) => (prev + 1) % SERVICES.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	const scrollToSection = (sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<div
			className={`min-h-screen transition-all duration-500 ${
				darkMode ? "dark bg-gray-900" : "bg-white"
			}`}>
			<Navbar
				darkMode={darkMode}
				toggleDarkMode={toggleDarkMode}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				scrollToSection={scrollToSection}
			/>
			<Hero darkMode={darkMode} scrollToSection={scrollToSection} />
			<AboutUs darkMode={darkMode} />
			<Services darkMode={darkMode} />
			<Contact darkMode={darkMode} />
			<Footer darkMode={darkMode} />
		</div>
	);
};

export default UnityHomeCare;
