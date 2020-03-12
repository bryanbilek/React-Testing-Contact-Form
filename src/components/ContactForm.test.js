import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders Contact Form without crashing", () => {
    render(<ContactForm />);
});

test("checking if first name, last name, email, & message inputs render", () => {
    const { getByLabelText } = render(<ContactForm />)

    //getting input labels
    getByLabelText(/first name*/i);
    getByLabelText(/last name*/i);
    getByLabelText(/email*/i);
    getByLabelText(/message/i);
});

test("submitting the form adds the input fields entered as an object below the form", () => {
    const { getByLabelText, getByText, findByText } = render(<ContactForm />);

    //querying for the 4 input labels
    const firstNameInput = getByLabelText(/first name*/i);
    const lastNameInput = getByLabelText(/last name*/i);
    const emailInput = getByLabelText(/email*/i);
    const messageInput = getByLabelText(/message/i);

    //checking change event in form for all 4 inputs to see if text gets addded
    fireEvent.change(firstNameInput, { target: { value: 'Test First nAme' } });
    fireEvent.change(lastNameInput, { target: { value: 'TesT last name' } });
    fireEvent.change(emailInput, { target: { value: 'Test email123' } });
    fireEvent.change(messageInput, { target: { value: 'Test meSSage' } });

    //expecting each input to be the string written for the values above
    expect(firstNameInput.value).toBe('Test First nAme');
    expect(lastNameInput.value).toBe('TesT last name');
    expect(emailInput.value).toBe('Test email123');
    expect(messageInput.value).toBe('Test meSSage');

    //checking the submit form button
    fireEvent.click(getByText(/submit/i));
})

test("checking placeholders render properly", () => {
    const { getByPlaceholderText, getAllByPlaceholderText } = render(<ContactForm />)
    //placeholder text renders
    getAllByPlaceholderText(/bill/i);
    getByPlaceholderText(/luo/i);
})