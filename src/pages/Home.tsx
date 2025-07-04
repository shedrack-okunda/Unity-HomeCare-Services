import { useState, useEffect } from "react";
import {
	Heart,
	Shield,
	Users,
	Phone,
	Mail,
	MapPin,
	Clock,
	Star,
	Moon,
	Sun,
	Menu,
	X,
	ArrowRight,
} from "lucide-react";
import { services } from "./Services";

const UnityHomeCare = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeService, setActiveService] = useState(0);
	console.log(activeService);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveService((prev) => (prev + 1) % services.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

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
			{/* Navigation */}
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					darkMode
						? "bg-gray-900/95 backdrop-blur-lg border-gray-700"
						: "bg-white/95 backdrop-blur-lg border-gray-100"
				} border-b`}>
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div
								className={`p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600`}>
								<Heart className="h-6 w-6 text-white" />
							</div>
							<span
								className={`text-1xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
								Unity HomeCare Services
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							<button
								onClick={() => scrollToSection("services")}
								className={`hover:text-blue-600 transition-colors ${
									darkMode ? "text-gray-300" : "text-gray-700"
								}`}>
								Services
							</button>
							<button
								onClick={() => scrollToSection("about")}
								className={`hover:text-blue-600 transition-colors ${
									darkMode ? "text-gray-300" : "text-gray-700"
								}`}>
								About
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className={`hover:text-blue-600 transition-colors ${
									darkMode ? "text-gray-300" : "text-gray-700"
								}`}>
								Contact
							</button>
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-lg transition-all hover:scale-110 ${
									darkMode
										? "bg-gray-800 text-yellow-500"
										: "bg-gray-100 text-gray-700"
								}`}>
								{darkMode ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</button>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex items-center space-x-4 md:hidden">
							<button
								onClick={toggleDarkMode}
								className={`p-2 rounded-lg transition-all ${
									darkMode
										? "bg-gray-800 text-yellow-500"
										: "bg-gray-100 text-gray-700"
								}`}>
								{darkMode ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</button>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className={`p-2 rounded-lg transition-all ${
									darkMode
										? "bg-gray-800 text-white"
										: "bg-gray-100 text-gray-700"
								}`}>
								{isMenuOpen ? (
									<X className="h-6 w-6" />
								) : (
									<Menu className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div
							className={`md:hidden mt-4 p-4 rounded-xl ${
								darkMode ? "bg-gray-800" : "bg-gray-50"
							}`}>
							<div className="space-y-3">
								<button
									onClick={() => scrollToSection("services")}
									className={`block w-full text-left py-2 hover:text-blue-600 transition-colors ${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									}`}>
									Services
								</button>
								<button
									onClick={() => scrollToSection("about")}
									className={`block w-full text-left py-2 hover:text-blue-600 transition-colors ${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									}`}>
									About
								</button>
								<button
									onClick={() => scrollToSection("contact")}
									className={`block w-full text-left py-2 hover:text-blue-600 transition-colors ${
										darkMode
											? "text-gray-300"
											: "text-gray-700"
									}`}>
									Contact
								</button>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				className={`pt-20 pb-16 px-6 bg-gradient-to-br ${
					darkMode
						? "from-gray-900 via-blue-900 to-purple-900"
						: "from-blue-50 via-purple-50 to-pink-50"
				}`}>
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<div
									className={`inline-flex items-center px-4 py-2 rounded-full ${
										darkMode
											? "bg-blue-900/50 text-blue-300"
											: "bg-blue-100 text-blue-800"
									} border ${
										darkMode
											? "border-blue-700"
											: "border-blue-200"
									}`}>
									<Shield className="h-4 w-4 mr-2" />
									<span className="text-sm font-medium">
										Trusted Professional Care
									</span>
								</div>

								<h1
									className={`text-5xl lg:text-7xl font-bold leading-tight ${
										darkMode
											? "text-white"
											: "text-gray-900"
									}`}>
									Caring for Your
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										{" "}
										Loved Ones
									</span>
									<br />
									At Home
								</h1>

								<p
									className={`text-xl leading-relaxed ${
										darkMode
											? "text-gray-300"
											: "text-gray-600"
									}`}>
									Professional home healthcare services
									providing compassionate, personalized care
									in the comfort of your own home. We're here
									when you need us most.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={() => scrollToSection("services")}
									className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center">
									Explore Our Services
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</button>
								<button
									onClick={() => scrollToSection("contact")}
									className={`px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2 ${
										darkMode
											? "border-gray-600 text-white hover:bg-gray-800"
											: "border-gray-300 text-gray-700 hover:bg-gray-50"
									}`}>
									Get In Touch
								</button>
							</div>

							<div className="flex ml-5 items-center space-x-8">
								<div className="text-center">
									<div
										className={`text-3xl font-bold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										24/7
									</div>
									<div
										className={`text-sm ${
											darkMode
												? "text-gray-400"
												: "text-gray-600"
										}`}>
										Available
									</div>
								</div>
								<div className="text-center">
									<div
										className={`text-3xl font-bold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										200+
									</div>
									<div
										className={`text-sm ${
											darkMode
												? "text-gray-400"
												: "text-gray-600"
										}`}>
										Families Served
									</div>
								</div>
								<div className="text-center">
									<div
										className={`text-3xl font-bold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										5★
									</div>
									<div
										className={`text-sm ${
											darkMode
												? "text-gray-400"
												: "text-gray-600"
										}`}>
										Rated Service
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<img
								src="/images/hero.avif"
								alt="Professional nurse providing compassionate care to elderly patient"
								className="w-full h-auto rounded-2xl shadow-2xl object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className={`py-20 px-6 ${
					darkMode ? "bg-gray-800" : "bg-gray-50"
				}`}>
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2
							className={`text-4xl lg:text-5xl font-bold mb-6 ${
								darkMode ? "text-white" : "text-gray-900"
							}`}>
							Our{" "}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Services
							</span>
						</h2>
						<p
							className={`text-xl max-w-3xl mx-auto ${
								darkMode ? "text-gray-300" : "text-gray-600"
							}`}>
							Comprehensive home healthcare services tailored to
							meet your unique needs with compassion and
							expertise.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${
									darkMode
										? "from-gray-900 via-gray-800 to-gray-900"
										: "from-blue-50 via-purple-100 to-blue-50"
								} border ${
									darkMode
										? "border-gray-700"
										: "border-gray-100"
								} flex flex-col`}>
								{/* Icon + Title */}
								<div className="relative z-10 p-4 sm:p-6 lg:p-8">
									<div
										className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
										{service.icon}
									</div>
									<h3
										className={`text-lg sm:text-xl lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-4 ${
											darkMode
												? "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r"
												: "text-transparent bg-clip-text bg-gradient-to-r"
										} ${
											service.color
										} transition-all duration-300`}>
										{service.title}
									</h3>
								</div>

								{/* Image */}
								<div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-all duration-700 brightness-75 group-hover:brightness-60 group-hover:scale-110"
									/>
								</div>

								{/* Description */}
								<div className="relative z-10 p-4 sm:px-6 lg:px-8 pb-6 flex-grow flex flex-col">
									<p
										className={`text-md font-semibold md:text-base lg:text-base leading-relaxed transition-all duration-300 ${
											darkMode
												? `text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.color}`
												: "text-gray-700"
										}`}>
										{service.description}
									</p>

									{/* Hover indicator line */}
									<div
										className={`mt-4 sm:mt-5 lg:mt-6 w-0 h-0.5 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className={`py-20 px-6 ${
					darkMode ? "bg-gray-900" : "bg-white"
				}`}>
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<h2
									className={`text-4xl lg:text-5xl font-bold ${
										darkMode
											? "text-white"
											: "text-gray-900"
									}`}>
									Why Choose{" "}
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										Unity Home Care?
									</span>
								</h2>
								<p
									className={`text-xl leading-relaxed ${
										darkMode
											? "text-gray-300"
											: "text-gray-600"
									}`}>
									We believe that quality healthcare should be
									accessible in the comfort of your own home.
									Our dedicated team of professionals provides
									personalized care with compassion, dignity,
									and respect.
								</p>
							</div>

							<div className="grid sm:grid-cols-2 gap-6">
								<div
									className={`p-6 rounded-xl ${
										darkMode ? "bg-gray-800" : "bg-blue-50"
									} border ${
										darkMode
											? "border-gray-700"
											: "border-blue-100"
									}`}>
									<Users className="h-8 w-8 text-blue-600 mb-4" />
									<h3
										className={`font-semibold mb-2 ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										Licensed Professionals
									</h3>
									<p
										className={`text-sm ${
											darkMode
												? "text-gray-300"
												: "text-gray-600"
										}`}>
										Certified healthcare providers with
										years of experience
									</p>
								</div>
								<div
									className={`p-6 rounded-xl ${
										darkMode
											? "bg-gray-800"
											: "bg-purple-50"
									} border ${
										darkMode
											? "border-gray-700"
											: "border-purple-100"
									}`}>
									<Clock className="h-8 w-8 text-purple-600 mb-4" />
									<h3
										className={`font-semibold mb-2 ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										24/7 Availability
									</h3>
									<p
										className={`text-sm ${
											darkMode
												? "text-gray-300"
												: "text-gray-600"
										}`}>
										Round-the-clock support when you need it
										most
									</p>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="grid grid-cols-2 gap-6">
								<div
									className={`p-6 rounded-2xl ${
										darkMode
											? "bg-gradient-to-br from-blue-900 to-purple-900"
											: "bg-gradient-to-br from-blue-100 to-purple-100"
									} border ${
										darkMode
											? "border-blue-700"
											: "border-blue-200"
									}`}>
									<Heart
										className={`h-8 w-8 mb-4 ${
											darkMode
												? "text-blue-300"
												: "text-blue-600"
										}`}
									/>
									<h4
										className={`font-semibold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										Compassionate Care
									</h4>
								</div>
								<div
									className={`p-6 rounded-2xl ${
										darkMode
											? "bg-gradient-to-br from-green-900 to-teal-900"
											: "bg-gradient-to-br from-green-100 to-teal-100"
									} border ${
										darkMode
											? "border-green-700"
											: "border-green-200"
									} mt-8`}>
									<Shield
										className={`h-8 w-8 mb-4 ${
											darkMode
												? "text-green-300"
												: "text-green-600"
										}`}
									/>
									<h4
										className={`font-semibold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										Safety First
									</h4>
								</div>
								<div
									className={`p-6 rounded-2xl ${
										darkMode
											? "bg-gradient-to-br from-purple-900 to-pink-900"
											: "bg-gradient-to-br from-purple-100 to-pink-100"
									} border ${
										darkMode
											? "border-purple-700"
											: "border-purple-200"
									} -mt-4`}>
									<Users
										className={`h-8 w-8 mb-4 ${
											darkMode
												? "text-purple-300"
												: "text-purple-600"
										}`}
									/>
									<h4
										className={`font-semibold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										Family Focused
									</h4>
								</div>
								<div
									className={`p-6 rounded-2xl ${
										darkMode
											? "bg-gradient-to-br from-orange-900 to-red-900"
											: "bg-gradient-to-br from-orange-100 to-red-100"
									} border ${
										darkMode
											? "border-orange-700"
											: "border-orange-200"
									} mt-4`}>
									<Star
										className={`h-8 w-8 mb-4 ${
											darkMode
												? "text-orange-300"
												: "text-orange-600"
										}`}
									/>
									<h4
										className={`font-semibold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										Quality Assured
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className={`py-20 px-6 ${
					darkMode
						? "bg-gradient-to-br from-gray-800 to-gray-900"
						: "bg-gradient-to-br from-blue-50 to-purple-50"
				}`}>
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2
							className={`text-4xl lg:text-5xl font-bold mb-6 ${
								darkMode ? "text-white" : "text-gray-900"
							}`}>
							Get In{" "}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Touch
							</span>
						</h2>
						<p
							className={`text-xl max-w-3xl mx-auto ${
								darkMode ? "text-gray-300" : "text-gray-600"
							}`}>
							Ready to provide the care your family deserves.
							Contact us today for a free consultation.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<div
							className={`p-8 rounded-2xl text-center transition-all hover:scale-105 ${
								darkMode
									? "bg-gray-800 border-gray-700"
									: "bg-white border-gray-100"
							} border shadow-lg`}>
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<Phone className="h-8 w-8 text-white" />
							</div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									darkMode ? "text-white" : "text-gray-900"
								}`}>
								Call Us
							</h3>
							<p
								className={`${
									darkMode ? "text-gray-300" : "text-gray-600"
								} mb-4`}>
								Available 24/7 for emergencies
							</p>
							<a
								href="tel:+254703919412"
								className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
								+254 703 919 412
							</a>
							<span
								className={`${
									darkMode ? "text-gray-300" : "text-gray-600"
								} mb-4`}>
								{" / "}
							</span>
							<a
								href="tel:+254724551516"
								className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
								+254 724 551 516
							</a>
						</div>

						<div
							className={`p-8 rounded-2xl text-center transition-all hover:scale-105 ${
								darkMode
									? "bg-gray-800 border-gray-700"
									: "bg-white border-gray-100"
							} border shadow-lg`}>
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<Mail className="h-8 w-8 text-white" />
							</div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									darkMode ? "text-white" : "text-gray-900"
								}`}>
								Email Us
							</h3>
							<p
								className={`${
									darkMode ? "text-gray-300" : "text-gray-600"
								} mb-4`}>
								Get a detailed response within 24 hours
							</p>
							<a
								href="mailto:unityhomecare874@gmail.com"
								className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
								unityhomecare874@gmail.com
							</a>
						</div>

						<div
							className={`p-8 rounded-2xl text-center transition-all hover:scale-105 ${
								darkMode
									? "bg-gray-800 border-gray-700"
									: "bg-white border-gray-100"
							} border shadow-lg`}>
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
								<MapPin className="h-8 w-8 text-white" />
							</div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									darkMode ? "text-white" : "text-gray-900"
								}`}>
								Visit Us
							</h3>
							<p
								className={`${
									darkMode ? "text-gray-300" : "text-gray-600"
								} mb-4`}>
								Our office is open Monday - Friday
							</p>
							<p className="text-green-600 font-semibold">
								Nairobi, Kenya
								{/* <br />
								Westlands District */}
							</p>
						</div>
					</div>

					<div className="mt-16 text-center">
						<div
							className={`inline-flex items-center px-6 py-3 rounded-full ${
								darkMode
									? "bg-blue-900/50 text-blue-300"
									: "bg-blue-100 text-blue-800"
							} border ${
								darkMode ? "border-blue-700" : "border-blue-200"
							}`}>
							<Clock className="h-5 w-5 mr-2" />
							<span className="font-medium">
								Emergency Support Available 24/7
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer
				className={`py-12 px-6 ${
					darkMode
						? "bg-gray-900 border-gray-800"
						: "bg-gray-800 border-gray-200"
				} border-t`}>
				<div className="container mx-auto">
					<div className="text-center">
						<div className="flex items-center justify-center space-x-3 mb-6">
							<div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
								<Heart className="h-6 w-6 text-white" />
							</div>
							<span className="text-2xl font-bold text-white">
								Unity Home Care Services
							</span>
						</div>
						<p className="text-gray-400 mb-8 max-w-2xl mx-auto">
							Providing compassionate, professional home
							healthcare services across Nairobi and surrounding
							areas. Your health, our priority.
						</p>
						<div className="flex justify-center space-x-6 mb-8">
							<a
								href="tel:+254703919412"
								className="text-gray-400 hover:text-white transition-colors">
								<Phone className="h-6 w-6" />
							</a>
							<a
								href="mailto:unityhomecare874@gmail.com"
								className="text-gray-400 hover:text-white transition-colors">
								<Mail className="h-6 w-6" />
							</a>
							{/* <a
								href="#"
								className="text-gray-400 hover:text-white transition-colors">
								<MapPin className="h-6 w-6" />
							</a> */}
						</div>
						<div className="border-t border-gray-700 pt-8">
							<p className="text-gray-500 text-sm">
								© 2025 Unity HomeCare Services. All rights
								reserved. | Licensed Healthcare Provider
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default UnityHomeCare;
