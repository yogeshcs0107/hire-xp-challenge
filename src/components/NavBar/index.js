import React from 'react';
import {Nav} from 'react-bootstrap';

import './NavBar.css';
import ChangeFont from '../ChangeFont'

class NavBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 'fontSize': 1.5};
    }
    onChangeFontSize =(val)=> {
        let fontSize = val;
        this.setState({fontSize});
    }
    render () {
        return(
            <div className="nav-wrapper">
                <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                         <Nav.Link href="/home"  style={{fontSize: this.state.fontSize+'rem'}}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" style={{fontSize: this.state.fontSize+'rem'}}>Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled  style={{fontSize: this.state.fontSize+'rem'}}>
                            Tab 3
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled  style={{fontSize: this.state.fontSize+'rem'}}>
                            Tab 4
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <ChangeFont onChangeFontSize={this.onChangeFontSize} />
            </div>
        )
    }
    
}
export default NavBar;