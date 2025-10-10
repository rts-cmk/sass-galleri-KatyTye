import RandomImages from "../components/RandomImages.jsx"
import instagramSVG from "../assets/instagram.svg"
import burgerSVG from "../assets/burgermenu.svg"
import facebookSVG from "../assets/facebook.svg"
import twitterSVG from "../assets/twitter.svg"

function App() {
	function toggleNavigation(element) {
		let newElement = element

		if (element.parentElement.className.includes("burger")) { newElement = element.parentElement.parentElement }
		newElement.children[4].classList.toggle("top-content__phone-hidden-navigation")
	}

	return (
		<>
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

			<main className="page-content">
				<RandomImages amount={2} width={300} minAndMax={[375, 425]} />
			</main>

			<footer className="bottom-content">
				<div className="bottom-content__line-break"></div>

				<a href="https://www.facebook.com/" title="Click to open facebook.com" target="_blank" className="bottom-content__redirect bottom-content__redirect-1">
					<img src={facebookSVG} alt="image of another website" className="bottom-content__redirect-image"></img>
				</a>

				<a href="https://www.instagram.com/" title="Click to open instagram.com" target="_blank" className="bottom-content__redirect bottom-content__redirect-2">
					<img src={instagramSVG} alt="image of another website" className="bottom-content__redirect-image"></img>
				</a>

				<a href="https://twitter.com/" title="Click to open twitter.com" target="_blank" className="bottom-content__redirect bottom-content__redirect-3">
					<img src={twitterSVG} alt="image of another website" className="bottom-content__redirect-image"></img>
				</a>
			</footer>
		</>
	)
}

export default App
