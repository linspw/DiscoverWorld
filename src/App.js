import React from 'react';
import { Router, Redirect } from "@reach/router";
import HeaderSection from './containers/HeaderSection';
import HomePage from './containers/MainSection/HomePage';
//import LoaderSpinner from './components/LoaderSpinner';
import './App.css';

/*
const ProtectedRoute = ({ component: Component, ...rest }) => {
  if(rest.isAuth===true){
    return <Component {...rest} />
  } else if(rest.isAuth===null){
    return <LoaderSpinner/>
  }else{
    return <Redirect from="" to="/login" noThrow />
  }
}*/

const PublicRoute = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

/*
const InverseRoute = ({ component: Component, ...rest }) => {
    if(rest.isAuth===true){
      return <Redirect from="" to="/" noThrow />
    } else if(rest.isAuth===null){
      return <LoaderSpinner/>
    }else{
      return <Component {...rest} />
    }
}*/


class App extends React.Component{
  render(){
    return (
      <>
        <HeaderSection/>
        <Router className="main-section">
          <PublicRoute path="/*" component={HomePage}/>
        </Router>
      </>
      );
  }
}

export default App;
