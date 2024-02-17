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
		</div>
	);
}

function Main() {
	return (
		<main>
			<div className="container">
				<div className="profile-info">
					<img src="/images/avatar-jessica.jpeg" alt="Profile"></img>
					<div className="personal-info">
						<h1 className="name">Jessica Randall</h1>
						<h2 className="location">London, United Kingdom</h2>
					</div>
					<h3 className="role">"Front-end developer and avid reader."</h3>
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
