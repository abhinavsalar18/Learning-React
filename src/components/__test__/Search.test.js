import { render } from "@testing-library/react"
import Body from "../Body"
import RES_LIST_MOCK_DATA from "../mockData/resList.mock.json"
import { BrowserRouter } from "react-router-dom"
import {act} from "react-dom/test-utils"

// jest-dom is a browser like environment therefore does not have fetch api
// we can replce fetch with a mock fetch with exact functionality
// fetch -> retuns a promise with again resolve by data.json <- another promise
// lets create a similar fun

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(RES_LIST_MOCK_DATA)
            }
        }
    )
})
 test("Should render Search Component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )

    })
})