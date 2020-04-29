import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Routes from "./routes";
import "./config/StatusBarConfig"


const navegation = createStackNavigator({
        Home:{
            screen: Routes,
        },
    }, 
   
    );

const App = createAppContainer(navegation);


export default App;