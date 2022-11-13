import React,{Component} from "react";
import {Button} from 'react-bootstrap';

class Asistance extends Component {
    constructor(props) {
        super(props);
        this.state = { showTitle: false };
}
render() {
    return (
      <div>
        <Button variant="info"  onClick={() => this.setState({ showTitle: true })}>Confirm attendance at the sale</Button>
        {this.state.showTitle && (
          <h1>¡Thank you for confirming your attendance!</h1>
        )}
      </div>
    );
  }
}
export default Asistance
