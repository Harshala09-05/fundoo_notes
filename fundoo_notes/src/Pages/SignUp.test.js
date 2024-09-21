// import React from 'react';
// // import { shallow } from 'enzyme';
// import SignUp from './SignUp';
// import { TextField, Button } from '@mui/material';

// describe("SignUp Component", () => {

//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<SignUp />);
//   });

//   it("renders the form correctly", () => {
//     expect(wrapper.find('div.Register-container').exists()).toBe(true);
//     expect(wrapper.find(TextField).length).toBe(5); // 5 text fields (including first name, last name, email, password, confirm)
//     expect(wrapper.find(Button).text()).toEqual("Next");
//   });

//   it("updates state when text fields change", () => {
//     const firstNameField = wrapper.find(TextField).at(0);
//     firstNameField.simulate('change', {
//       target: { name: 'firstName', value: 'John' }
//     });

//     const state = wrapper.find('SignUp').props().userDetail;
//     expect(state.firstName).toEqual('John');
//   });

//   it("displays error for invalid first name", () => {
//     const firstNameField = wrapper.find(TextField).at(0);
//     firstNameField.simulate('change', {
//       target: { name: 'firstName', value: 'jo' }
//     });

//     const state = wrapper.find('SignUp').props().checkError;
//     expect(state.firstNameError).toEqual("First name must start with a capital letter and have at least 3 characters");
//   });

//   it("submits form correctly", async () => {
//     const signUpMock = jest.fn(); // Mock the API call
//     wrapper.setState({
//       userDetail: {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@gmail.com',
//         password: 'Password@123',
//         confirm: 'Password@123'
//       }
//     });

//     const submitButton = wrapper.find(Button);
//     submitButton.simulate('click', { preventDefault() {} });

//     expect(signUpMock).toHaveBeenCalled();
//   });
// });
