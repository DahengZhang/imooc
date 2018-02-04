import React, { Component } from 'react';

class App extends Component {
  render () {
    const boss = '李云龙'
    return <div>
      <h2>独立团, 团长{boss}</h2>
      <一营 老大='张大彪'></一营>
      <骑兵连 老大='孙得胜'></骑兵连>
    </div>
  }
}


class 一营 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      soldiers: ['虎子', '柱子', '王根生']
    }
  }
  addSoldier = () => {
    this.setState({
      soldiers: [...this.state.soldiers, '新兵蛋子'+Math.random()]
    })
  }
  reduceSoldier = (index) => {
    this.state.soldiers.splice(index, 1)
    this.setState({
      soldiers: this.state.soldiers
    })
  }
  render() {
    return (
      <div>
        <h2>一营营长,{this.props.老大}</h2>
        <button onClick={this.addSoldier}>新兵入伍</button>
        <ul>
          {this.state.soldiers.map((v, index) => <li key={index} onClick={this.reduceSoldier.bind(this, index)}>{v}</li>)}
        </ul>
      </div>
    )
  }
}

// 简易组件
function 骑兵连(props) {
  return <h2>骑兵连连长{props.老大}，冲阿！</h2>
}
export default App;
