import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import { Provider } from "react-redux";
import store from "./Store";
function App() {
  return (
    <>
     <h1>Welcome To Emoji's Hub</h1>
     <h2>Here Are Some Emojis</h2>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
         
          <Route path="/details/:categoryId" element={<DetailsPage/>} />
        </Routes>
      </Router>
     

      </Provider>
      
     
      

      
    </>
  );
}

export default App;
