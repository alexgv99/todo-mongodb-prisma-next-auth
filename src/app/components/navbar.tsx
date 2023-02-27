import { useSession } from "next-auth/react";
import React from "react";
import LoginButton from "./login-button";

export default function Navbar({ fixed }) {
	return (
		<nav className="flex w-auto justify-between p-5 bg-blue-600  text-white mb-10">
			<span className="text-lg font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase">
				Projeto de estudos
			</span>
			<LoginButton />
		</nav>
	);
}
