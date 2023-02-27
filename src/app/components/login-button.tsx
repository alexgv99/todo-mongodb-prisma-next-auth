"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className="flex gap-5">
				<Image
					className="rounded-full"
					src={session.user.image || "/unknown.webp"}
					alt="avatar"
					width="48"
					height="48"
				/>
				<div className="flex flex-col items-start">
					<span>{session.user.email}</span>
					<button onClick={() => signOut()}>Sign out</button>
				</div>
			</div>
		);
	}
	return (
		<div className="flex-col">
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
}
