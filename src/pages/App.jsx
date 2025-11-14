import RandomImages from "../components/RandomImages.jsx"
import instagramSVG from "../assets/instagram.svg"
import facebookSVG from "../assets/facebook.svg"
import Header from "../components/Header.jsx"
import twitterSVG from "../assets/twitter.svg"

function App() {
	return (
		<>
			<Header />

			<main className="page-content">
				<RandomImages amount={25} width={300} minAndMax={[375, 425]} />
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
