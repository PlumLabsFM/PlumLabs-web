import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Login from "../src/pages/Login/Login";


describe(("login page test"), () => {

	describe('UI test case', () => {

		test("test sign in button text"), () => {
			render(
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			);
			const signinBtnText = screen.getByText(/sign in/i);
			expect(signinBtnText).toBeInTheDocument();
		};

		test("test username input", () => {
			render(
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			);

			const usernameInput = screen.getByPlaceholderText(/Username.../i);
			fireEvent.change(usernameInput, { target: { value: 'email' } });
			expect(usernameInput.value).toBe('email');
		});
	});

	describe("test on change event in input box", () => {
		test("test username and password inputs on change", () => {
			render(
				<MemoryRouter>
					<Login />
				</MemoryRouter>
			);

			const usernameInput = screen.getByLabelText("Email");
			fireEvent.change(usernameInput, { target: { value: "testUser" } });
			expect(usernameInput.value).toBe("testUser");

			const passwordInput = screen.getByLabelText("Password");
			fireEvent.change(passwordInput, { target: { value: "testPassword" } });
			expect(passwordInput.value).toBe("testPassword");
		});
	});
});