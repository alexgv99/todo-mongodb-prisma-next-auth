import Navbar from "./components/navbar";
import Providers from "./components/providers";
import "./globals.css";

export const metadata = {
	title: "Estudos",
	description: "Projeto de estudos",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="container mx-auto">
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
