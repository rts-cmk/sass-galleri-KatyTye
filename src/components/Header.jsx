import burgerSVG from "../assets/burgermenu.svg"

export default function Header() {
	function toggleNavigation(element) {
		let newElement = element

		if (element.parentElement.className.includes("burger")) { newElement = element.parentElement.parentElement }
		newElement.children[4].classList.toggle("top-content__phone-hidden-navigation")
	}

	return (
		<header className="top-content">
			<input type="search" id="more" name="search" className="top-content__search-bar" placeholder="Search..."></input>

			<div className="top-content__line-break"></div>

			<h1 id="home" className="top-content__page-title">Explore</h1>

			<button className="top-content__burger-button" onClick={event => toggleNavigation(event.target)}>
				<img src={burgerSVG} alt="burger icon" className="top-content__burger-button-image"></img>
			</button>

			<nav className="top-content__page-navigation top-content__phone-hidden-navigation">
				<a href="#lifestyle" className="top-content__page-option top-content__page-option-1">Lifestyle</a>
				<a href="#food" className="top-content__page-option top-content__page-option-2">Food</a>
				<a href="#home" className="top-content__page-option top-content__page-option-3">Home</a>
				<a href="#travel" className="top-content__page-option top-content__page-option-4">Travel</a>
				<a href="#more" className="top-content__page-option top-content__page-option-5">More</a>
			</nav>
		</header>
	)
}