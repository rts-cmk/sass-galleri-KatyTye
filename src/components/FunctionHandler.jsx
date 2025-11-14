import dislikeIcon from "../assets/dislike.svg"
import likeIcon from "../assets/like.svg"

export function clickHandler(target) {
	const url = target.parentElement.parentElement.children[0].src
	window.open(url, "_blank")
}

export async function downloadHandler(target) {
	const image = target.parentElement.parentElement.children[0].src
	const response = await fetch(image)
	const blob = await response.blob()
	const url = URL.createObjectURL(blob)

	const downloadTag = document.createElement("a")
	downloadTag.download = image.split("/")[6].split("?")[0]
	downloadTag.href = url

	document.body.appendChild(downloadTag)

	downloadTag.click()
	downloadTag.remove()
	URL.revokeObjectURL(url)
}

export function likeButtonHandler(target, doElements, currentSource) {

	if (doElements == true) {
		if ((localStorage.getItem("likedImages") || "").includes(currentSource)) {
			return (
				<img src={likeIcon} alt="like icon"></img>
			)
		} else {
			return (
				<img src={dislikeIcon} alt="dislike icon"></img>
			)
		}

	} else {
		if (target.alt == "dislike icon") {
			target.alt = "like icon"
			target.src = likeIcon
			localStorage.setItem("likedImages", `${localStorage.getItem("likedImages") || ""}${currentSource}~`)
		} else {
			target.alt = "dislike icon"
			target.src = dislikeIcon
			localStorage.setItem("likedImages", (localStorage.getItem("likedImages") || "").replace(currentSource + "~", ""))
		}
	}
}