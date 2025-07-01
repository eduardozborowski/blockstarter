import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<h1 className="text-3xl font-bold text-blue-600">
				My project with Rsbuild + Tailwind + React!
			</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(<App />);
