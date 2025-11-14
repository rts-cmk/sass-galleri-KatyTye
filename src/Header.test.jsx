import { render } from 'vitest-browser-react'
import Header from "./components/Header"
import { describe, expect, it } from "vitest"

describe("Header Component", () => {
	it("should look correct with styles applied", async () => {
		await import("./styles/main.sass")

		const component = await render(<Header />)

		await expect(component.container).toMatchScreenshot()
	})
})