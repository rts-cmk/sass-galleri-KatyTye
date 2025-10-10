import { clickHandler, likeButtonHandler, downloadHandler } from "./FunctionHandler"
import { useState, useEffect } from "react"

function RandomImages({ amount, width, minAndMax }) {
	const [imageList, setImageList] = useState([])

	useEffect(() => {
		const fetchImages = async () => {
			const images = []
			for (let i = 0; i < amount; i++) {
				const height = Math.floor(Math.random() * (minAndMax[1] - minAndMax[0] + 1)) + minAndMax[0]
				const currentImage = await fetch(`https://picsum.photos/${width}/${height}?random=${i}`)
				images.push(currentImage.url)
			}
			setImageList(images)
		}
		fetchImages()
	}, [amount, width, minAndMax])

	return (
		<>
			<h2 className="page-content__image-list-title">
				Random Images
			</h2>
			<ul className={"page-content__image-list"}>
				{imageList.map((image, idx) => (
					<li className="page-content__image-list-item" key={"image-" + idx}>
						<figure className="page-content__image-holder">
							<img src={image} alt={image.split("/")[6].split("?")[0]} className="page-content__image" />
							<figcaption className="page-content__image-menu">
								<p title="Click to open this image." className="page-content__image-name" onClick={event => clickHandler(event.target)}>
									{image.split("/")[6].split("?")[0]}
								</p>
								<button title="Click to download image." className="page-content__image-button page-content__image-download" onClick={event => downloadHandler(event.target)}>
									Download
								</button>
								<button title="Click to like and dislike." onClick={event => likeButtonHandler(event.target, false, image)} className="page-content__image-button page-content__image-like">
									{likeButtonHandler(image.split("/")[6].split("?")[0], true)}
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