import React from "react"
import { TitleComponent, BodyComponent } from "./FunctionComponent";

const name = 'Simplilearn';
const greet = "<h1>Hello, {name}</h1>";

class App extends React.Component{
    render(){
    return(
        <div>
            <TitleComponent/>
            <BodyComponent name="hellp"/>
        </div>
    );
    }
}