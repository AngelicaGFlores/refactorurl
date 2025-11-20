function Navbar() {
    return (
			<nav>
				<span>Shortly</span>
				<div id="First-nav">
					<ul>
						<li>
							<a href="">Features</a>
						</li>
						<li>
							<a href="">Pricing</a>
						</li>
						<li>
							<a href="">Resources</a>
						</li>
					</ul>
					<ul id="drop-down">
						<li>
							<a href="">Features</a>
						</li>
						<li>
							<a href="">Pricing</a>
						</li>
						<li>
							<a href="">Resources</a>
						</li>
					</ul>
				</div>
				<div id="Second-nav">
					<a href="">Text</a>
					<button id="hero-button">Sign up</button>
				</div>
				<i className="fa-solid fa-bars"></i>
			</nav>
		);
}

export default Navbar;