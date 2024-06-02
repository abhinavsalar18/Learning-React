import Header from "../Header"
import {Provider} from "react-redux"
import appStore from "../../store/appStore"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

 describe("Test cases for Header Component", () => {
    test("Should render login button in Header component", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', {name: 'Login'})
        expect(loginButton).toBeInTheDocument() 
    });

    test("Should render Cart in Header component", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const cartItem = screen.getByText('Cart')
        expect(cartItem).toBeInTheDocument() 
    });
   
    test("Should change the login button text to logout on click event in Header component", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', {name: 'Login'})
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole('button', {name: 'Logout'})
        expect(logoutButton).toBeInTheDocument() 
    });


})