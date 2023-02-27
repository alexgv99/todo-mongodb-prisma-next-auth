"use client";

import { useSession } from "next-auth/react";

export default function SessionInfo() {
	const { data: session } = useSession();
	if (session) {
		return <pre>{JSON.stringify(session, null, 2)}</pre>;
	}
	return null;
}
