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
      solders: ['虎子', '柱子', '王根生']
    }
  }
  addSoldre = () => {
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+Math.random()]
    })
  }
  render() {
    return (
      <div>
        <h2>一营营长,{this.props.老大}</h2>
        <button onClick={this.addSoldre}>新兵入伍</button>
        <ul>
          {this.state.solders.map((v) => <li key={v}>{v}</li>)}
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
