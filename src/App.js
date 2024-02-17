import "./index.css";

const skills = [
	"GitHub",
	"Frontend Mentor",
	"LinkedIn",
	"Twitter",
	"Instagram",
];
export default function App() {
	return (
		<div>
			<Main />
			<Footer />
		</div>
	);
}

function Main() {
	return (
		<main>
			<div className="container">
				<div className="profile-info">
					<img src="/images/avatar-jessica.jpeg" alt="Profile"></img>
					<p className="name">Jessica Randall</p>
					<p className="location">London, United Kingdom</p>
					<p className="role">"Front-end developer and avid reader."</p>
				</div>
				<Skills />
			</div>
		</main>
	);
}

function Skills() {
	return (
		<ul className="skills">
			{skills.map((skill) => (
				<li className="skill" key={skill}>
					{skill}
				</li>
			))}
		</ul>
	);
}

function Footer() {
	return (
		<div className="attribution">
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
