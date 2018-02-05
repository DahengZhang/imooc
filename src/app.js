import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, reducerGun, addGunAsync } from './index.redux'

@connect(
    state => ({ num: state }),
    { addGun, reducerGun, addGunAsync }
)
class App extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.reducerGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>托两天在给</button>
            </div>
        )
    }
}

export default App
