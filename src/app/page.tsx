import Image from "next/image";
import { Inter } from "next/font/google";
import SessionInfo from "./components/session-info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className="container">E aí? de dentro do meu projeto de estudos</div>
			<SessionInfo />
		</>
	);
}
