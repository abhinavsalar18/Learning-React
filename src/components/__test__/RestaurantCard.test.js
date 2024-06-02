import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import RES_MOCK_DATA from "../mockData/resCard.mock.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import {withPromotedLabel} from "../RestaurantCard"

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard) 

describe("Test cases for RestaurantCard compoenent", () => {
    it("Should render the RestaurantCard component with mock data", () => {
        render(
            <BrowserRouter >
                <RestaurantCard resData={RES_MOCK_DATA}/>
            </BrowserRouter>
        )

        const resName = screen.getByText('Big Bowl')
        expect(resName).toBeInTheDocument(); 
    })

    it("Should render RestaurantCard  with promoted label", () => {
        render(
            <BrowserRouter >
                <PromotedRestaurantCard resData={RES_MOCK_DATA} />
            </BrowserRouter>
        )


        const resWithPromotedLabel = screen.getByText('Promoted')
        expect(resWithPromotedLabel).toBeInTheDocument(); 
    }) 
})