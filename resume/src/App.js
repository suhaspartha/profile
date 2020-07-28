import React, { Component } from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";

class App extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = window.VANTA.WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x77838b,
      shininess: 27.0,
      waveHeight: 25.0,
      waveSpeed: 0.5,
      zoom: 0.65,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div ref={this.vantaRef}>
        <MyNavbar />
        <div>
          <Homepage />
          <Aboutpage />
          <Contactpage />
        </div>
      </div>
    );
  }
}
export default App;
