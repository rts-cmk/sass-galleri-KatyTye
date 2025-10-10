import { clickHandler, likeButtonHandler, downloadHandler } from "./FunctionHandler"
import { useState, useEffect } from "react"
const simple = true

function RandomImages({ amount, width, minAndMax }) {
	const [imageList, setImageList] = useState([])
	const images = []

	useEffect(() => {
		const fetchImages = async () => {
			for (let i = 0; i < amount; i++) {
				const height = Math.floor(Math.random() * (minAndMax[1] - minAndMax[0] + 1)) + minAndMax[0]
				if (simple == true) {
					images.push(`https://picsum.photos/${width}/${height}?random=${i}`)
				} else {
					const currentImage = await fetch(`https://picsum.photos/${width}/${height}?random=${i}`)
					images.push(currentImage.url)
				}
			}
			setImageList(images)
		}
		fetchImages()
	}, [amount, width, minAndMax])

	function returnImageDescription(image) {
		if (simple == true) {
			return "Image of a random image."
		} else {
			return image.split("/")[6].split("?")[0]
		}
	}

	return (
		<>
			<h2 className="page-content__image-list-title">
				Random Images
			</h2>
			<ul className={"page-content__image-list"}>
				{imageList.map((image, idx) => (
					<li className="page-content__image-list-item" key={"image-" + idx}>
						<figure className="page-content__image-holder">
							<img src={image} alt={returnImageDescription(image)} className="page-content__image" />
							<figcaption className="page-content__image-menu">
								<p title="Click to open this image." className="page-content__image-name" onClick={event => clickHandler(event.target)}>
									{returnImageDescription(image)}
								</p>
								<button title="Click to download image." className="page-content__image-button page-content__image-download" onClick={event => downloadHandler(event.target)}>
									Download
								</button>
								<button title="Click to like and dislike." onClick={event => likeButtonHandler(event.target, false, image)} className="page-content__image-button page-content__image-like">
									{likeButtonHandler(returnImageDescription(image), true)}
								</button>
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</>
	)
}

export default RandomImages