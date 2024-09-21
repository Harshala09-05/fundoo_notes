// import React from 'react';
// import { shallow } from 'enzyme';
// import Login from './Login';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// describe('Login Component', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Login />);
//   });

//   it('should render login form correctly', () => {
//     expect(wrapper.exists()).toBeTruthy();
//     expect(wrapper.find('form').length).toBe(1); // Check if form exists
//   });

//   it('should render email and password TextFields', () => {
//     expect(wrapper.find(TextField).length).toBe(2);
//   });

//   it('should show error for invalid email', () => {
//     const emailField = wrapper.find(TextField).at(0);
//     emailField.simulate('change', {
//       target: { name: 'email', value: 'invalidemail' },
//     });
//     expect(wrapper.find(TextField).at(0).props().error).toBeTruthy();
//   });

//   it('should not show error for valid email', () => {
//     const emailField = wrapper.find(TextField).at(0);
//     emailField.simulate('change', {
//       target: { name: 'email', value: 'test@example.com' },
//     });
//     expect(wrapper.find(TextField).at(0).props().error).toBeFalsy();
//   });

//   it('should show error for invalid password', () => {
//     const passwordField = wrapper.find(TextField).at(1);
//     passwordField.simulate('change', {
//       target: { name: 'password', value: 'invalidPass' },
//     });
//     expect(wrapper.find(TextField).at(1).props().error).toBeTruthy();
//   });

//   it('should call handleSubmit when form is submitted', () => {
//     const form = wrapper.find('form');
//     const mockPreventDefault = jest.fn();
//     form.simulate('submit', { preventDefault: mockPreventDefault });
//     expect(mockPreventDefault).toHaveBeenCalled();
//   });

//   it('should render login button', () => {
//     expect(wrapper.find(Button).length).toBe(2); // Login and forgot password buttons
//   });
// });
