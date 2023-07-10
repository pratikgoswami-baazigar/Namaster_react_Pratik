import React from "react";

class ProfileClass extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        userInfo : {
           id: "Dummy id",
           avatar_url: "random"
        }
    }
    console.log("child construcor is called",this.props.name);
}

async componentDidMount() {

    this.timer = setInterval(() => {
     console.log("you are great");
    },1000)

    const data = await fetch("https://api.github.com/users/pratikgoswami-baazigar");
    const json = await data.json();
    console.log(json);
    this.setState({userInfo: json});
    console.log("child component did mount is called", this.props.name);
}

componentDidUpdate() {
    console.log(" component did update : after UI is updated with the api call");
}

componentWillUnmount() {
    clearInterval(this.timer)
    console.log("componentWillUnmount when you go to another page");
}

render () {
    console.log("child render is called", this.props.name);
    return (
        <div>
        <h2>userId:{this.state.userInfo.id}</h2>
        <img src={this.state.userInfo.avatar_url}/>
        </div>
        )
}
}

export default ProfileClass;

/*
*   for profile class :
     parent constructor
     parent render
     child constructor
     child render 

     componentDidMount
     api call
     setState

     child render
*
*/