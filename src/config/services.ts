import {
	Accessibility,
	Apple,
	Bandage,
	BarChart,
	Bath,
	Home,
	Pill,
	Stethoscope,
	Users,
	type LucideIcon,
} from "lucide-react";

export interface Services {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	color: string;
	image: string;
}

export const SERVICES: Services[] = [
	{
		id: "post-discharge",
		title: "Post Discharge Care",
		description:
			"Comprehensive support during your transition from hospital to home, ensuring continuity of care and peace of mind.",
		icon: Home,
		color: "from-blue-500 to-cyan-500",
		image: "/images/postdischarge.avif",
	},
	{
		id: "mobility-assistance",
		title: "Mobility Assistance",
		description:
			"Safe and dignified support for daily movement, helping maintain independence and prevent falls.",
		icon: Accessibility,
		color: "from-green-500 to-emerald-500",
		image: "/images/mobility.avif",
	},
	{
		id: "nutrition-support",
		title: "Feeding & Nutrition Support",
		description:
			"Personalized meal planning and feeding assistance to maintain optimal health and nutrition.",
		icon: Apple,
		color: "from-orange-500 to-red-500",
		image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center",
	},

	{
		id: "wound-care",
		title: "Wound Care Management",
		description:
			"Professional wound assessment, cleaning, and dressing changes following medical protocols.",
		icon: Bandage,
		color: "from-pink-500 to-rose-500",
		image: "/images/wound.avif",
	},
	{
		id: "monitoring-vitals",
		title: "Monitoring Vitals",
		description:
			"Regular monitoring of blood pressure, temperature, pulse, and other vital signs for your safety.",
		icon: BarChart,
		color: "from-purple-500 to-violet-500",
		image: "/images/monitoring.avif",
	},
	{
		id: "bathing-grooming",
		title: "Bathing & Grooming",
		description:
			"Respectful personal care assistance maintaining dignity while ensuring cleanliness and comfort.",
		icon: Bath,
		color: "from-teal-500 to-cyan-500",
		image: "/images/bathing.avif",
	},
	{
		id: "elderly-care",
		title: "Elderly Home Care",
		description:
			"Specialized care for seniors, promoting aging in place with comfort, safety, and companionship.",
		icon: Users,
		color: "from-indigo-500 to-blue-500",
		image: "/images/elderly.avif",
	},
	{
		id: "medication-admin",
		title: "Medication Administration",
		description:
			"Safe and accurate medication management ensuring proper dosages and timing as prescribed.",
		icon: Pill,
		color: "from-yellow-500 to-orange-500",
		image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop&crop=center",
	},
	{
		id: "nursing-care",
		title: "Professional Nursing Care",
		description:
			"Licensed nursing professionals providing skilled medical care in the comfort of your home.",
		icon: Stethoscope,
		color: "from-emerald-500 to-teal-500",
		image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=center",
	},
];
