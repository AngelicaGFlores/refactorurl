import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { use, useState } from "react";

function App() {
	const [text, setText] = useState("");
	const [links, setLinks] = useState([]);
	const handleClick = async () => {
		try {
			const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
				method: "POST",
				headers: {
					Authorization: `Bearer 7a0a8b22221d9a4b13cc8b8d0fbc741db2b6387f`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					long_url: text,
					domain: "bit.ly",
				}),
			});

			const data = await response.json();
			console.log(data);
			setLinks((p) => [...p, { link: data.link, long: data.long_url }]);
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="hero-image">
				<div className="hero-text">
					<h1>More than Just Shorter Links</h1>
					<p id="hero-p">
						Build your brand's recognition and detailed insights on how your
						links are performing
					</p>
					<button id="hero-button">Get Started</button>
				</div>

				<aside>
					<img
						src="/illustration-working.svg"
						alt="a person typing at their desktop"
					/>
				</aside>
			</div>

			<div className="input-background">
				<div id="inputURL">
					<label htmlFor="text"></label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						id="usertextURL"
						placeholder="Shorten a link here..."
					/>
					<button id="submit" onClick={handleClick}>
						submit
					</button>
				</div>
			</div>

			<section id="section">
				<ul id="section-list">{
				links.map(l => <li>
					{
						l.link
					}
				</li>)
				}</ul>
			</section>
			<div className="container bg-light">
				<article className="text-center">
					<h3>Advance Statistics</h3>
					<p>
						Track how your links are performing across the web with our advance
						Statistics dashboard
					</p>
				</article>
				<section className="d-flex align-items-center justify-content-center min-vh-100">
					{/* <!-- container of the cards --> */}
					<div className="container position-relative justify-content-center">
						{/* <!-- This holds the three box cards --> */}
						<div className="row align-items-center justify-content-center grid gap-3">
							{/* <!-- This is the first card --> */}
							<div className="col-sm-3 d-flex align-items-center">
								<div
									className="card"
									style={{ width: "18rem", height: "10rem" }}>
									<img
										src="/icon-brand-recognition.svg"
										className="card-img-top position-absolute-top align-items-center start-50 w-25 h-25"
										alt="icon brand recognition"
									/>
									<div className="card-body">
										<h5 className="card-title text-center">
											Brand Recognition
										</h5>
										<p className="card-text text-center">
											Boast your brand recognition with each click, GEneric
											links dont mean a thing. Branded links help instil
											confidence in your content.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="card" style={{ width: "18rem" }}>
									<img
										src="/icon-detailed-records.svg"
										className="card-img-top position-absolute-top align-items-center w-25 h-25"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title text-center">Detailed Records</h5>
										<p className="card-text text-center">
											Gain insights into who is clicking your links. Knowing
											when and where people engage with your content helps
											inform better decisions.
										</p>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="card" style={{ width: "18rem" }}>
									<img
										src="/icon-fully-customizable.svg"
										className="card-img-top position-absolute-top align-items-center w-25 h-25"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title text-center">
											Fully Customizable
										</h5>
										<p className="card-text text-center">
											Imrpove brand awareness and content discoverability
											through customizable links , supercharging audience
											engagement
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div>
				<source srcSet="/bg-boost-desktop.svg" type="image/svg+xml" />
				<span className="">Boast your links today</span>
				<button id="hero-button">Get Started</button>
			</div>

			<footer>
			<div className="container text-center">
				<div className="row align-items-center">
					<div className="col"><img src="/logo.svg" alt="" /></div>
					<div className="col">
						<table className="table table-borderless bg-light">
							<thead>
								<tr>
									<th scope="col">Features</th>
									<th scope="col">Resources</th>
									<th scope="col">Company</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>Link Shortening </th>
									<th>blog</th>
									<th>about</th>
								</tr>
								<tr>
									<th>Branded Links</th>
									<th>Devellopers</th>
									<th>Our Team</th>
								</tr>
								<tr>
									<th>Analytics</th>
									<th>Support</th>
									<th>Careers</th>
								</tr>
								<tr>
									<th></th>
									<th></th>
									<th>Contact</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col d-flex justify-content-around">
						<img src="/icon-facebook.svg" alt="facebook icon"/>
						<img src="/icon-twitter.svg" alt="twitter icon"/>
						<img src="/icon-pinterest.svg" alt=" pinterest icon"/>
						<img src="/icon-instagram.svg" alt=" instagram icon"/>
					</div>
				</div>
			</div>
		</footer>

		<div className="attribution">
			Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
				>Frontend Mentor</a
			>. Coded by
			<a
				href="https://github.com/AngelicaGFlores/project-shortenURL"
				target="_blank"
				>Angelica G Flores</a
			>.
		</div>
		</div>
	);
}

export default App;
