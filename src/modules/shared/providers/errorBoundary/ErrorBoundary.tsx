"use client";

import React from "react";
import Router from "next/router";

export class ErrorBoundary extends React.Component<
	{ children: React.ReactNode },
	{ hasError: boolean }
> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: unknown) {
		Router.replace("/error");
	}

	render() {
		if (this.state.hasError) {
			return null;
		}

		return this.props.children;
	}
}
