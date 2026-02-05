/* import bg from "@/resources/imgs/city-landscape.jpg";
import Image from "next/image"; */

import NavBar from "@/components/navBar";

export default function Home() {
	return (
		<div className="relative min-h-screen max-w-dvw">
			<main className="h-screen">
				{/* Navbar */}
				<NavBar />
			</main>
		</div>
	);
}
