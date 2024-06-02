import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Test Cases for Contact component", () => {
    test("Should load heading in Contact component", () => {
        render(<Contact />)
        const heading = screen.getByRole('heading')
    
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("Should load two input-box in Contact compoenent", () => {
        render(<Contact />)
    
        //Querying
        const inputBoxes = screen.getAllByRole('textbox')
        
        // Assertion
        expect(inputBoxes.length).toBe(2)
    })
    
    test("Should load input-box in Contact compoenent", () => {
        render(<Contact />)
    
        //Querying
        const inputName = screen.getByPlaceholderText('name')
        
        // Assertion
        expect(inputName).toBeInTheDocument()
    }) 
})