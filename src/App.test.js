import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as plaidReducer } from "./redux/reducers/PlaidReducer";
import { reducer as registerReducer } from "./redux/reducers/RegisterReducer";
// import { reducer as profileReducer } from "./redux/reducers/ProfileReducer";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  user:{
      id:null,
      token:"",
      message:"",
      LinkedAccount:true
  },
  error:null,
  isFetching:false
};

let loginReducer = (state = initialState, action) => {
  switch(action.type){
      default:
          return state;
  }
}

// , profileReducer

const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer}), applyMiddleware(thunk, logger));

configure({ adapter: new Adapter() });

test('App renders correctly',()=>{
  expect(render(
      <Provider store={store}>
          <Router>
              <App/>
          </Router>
      </Provider>
  )).toMatchSnapshot();
});

// const methodDoesNotExist = jest.fn();

// test("Button component fires callback function onClick", () => {
//   const component = shallow(<Button onClick={methodDoesNotExist}>Button</Button>);
//   component.find("button").simulate("click");
//   expect(methodDoesNotExist).toHaveBeenCalled();
// });