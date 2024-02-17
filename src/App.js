import "./index.css";

export default function App() {
	return (
		<div className="container">
			Jessica Randall London, United Kingdom "Front-end developer and avid
			reader." GitHub Frontend Mentor LinkedIn Twitter Instagram
			<Footer />
		</div>
	);
}

function Footer() {
	return (
		<div class="attribution">
			Challenge by
			<a
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank"
				rel="noreferrer"
			>
				Frontend Mentor
			</a>
			. Coded by <a href="https://github.com/justPulfer">Pulfer Dadson</a>.
		</div>
	);
}
