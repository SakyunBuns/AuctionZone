import React from "react";

export function TitleComponent() {
    return <h1 style={color="red"}></h1>
}

export class BodyComponent extends React.Component {
    render(){
        return <p>{this.props.name} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tellus varius, vulputate tellus vitae, tristique nibh. Donec pellentesque ante in laoreet finibus. Nullam tristique ut lorem eu eleifend. Maecenas.</p>
    }
}