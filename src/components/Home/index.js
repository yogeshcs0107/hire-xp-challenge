import React from 'react';
import './Home.css';
import home from '../../assets/home.jpg';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'lists': ['List Item 1', 'List Item 2'], 'buttonText': 'Add More'};
    }
    handleClick = () => {
        let value = this.inputVal;
        let btnText = this.addBtn;
        if(!this.addBtn.classList.contains('active')) {
            if(this.inputVal.classList.contains('d-none')) {
                this.inputVal.classList.remove('d-none');
                this.setState({
                    'buttonText': 'Add given item'
                });
                this.addBtn.classList.add('active');
            }
        } else {
            if(this.inputVal.value) {
                let lists = this.state.lists;
                lists.push(this.inputVal.value);
                this.setState({lists});
                this.inputVal.value = '';
            }
            this.inputVal.classList.add('d-none');
            this.addBtn.classList.remove('active');
            this.setState({
                'buttonText': 'Add More'
            });
        }
    }
    removeItem = (e) => {
        let lists = this.state.lists;
        lists.slice(0, lists.indexOf(e.currentTarget.innerHTML));
        this.setState({lists});
    }
    render () {
        let self = this;
        return(
            <div className="home-wrapper jumbotron">
                <img src={home} alt="home"/>
                <p>lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one lorem ipsum text is this one </p>
                <div>
                    <h3>List Items</h3>
                    <ul>
                    {this.state.lists.map(function(item) {
                        return <li key={item} onClick={self.removeItem}>{item}</li>;
                    })}
                    </ul>
                    <input type="text" id="list-input" className="form-control col-md-3 d-none" ref={(node) => {this.inputVal=node}}/>
                    <input type="button" className="btn" value={this.state.buttonText} ref={(node) => {this.addBtn = node}} onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
    
}

export default Home;