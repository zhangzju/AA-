import React from 'react';
import ListItem from './ListItem';
import "./milligram.min.css"

export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        data: [
        ],
        amount: 0
    }
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addItem() {
    let dataTemp = this.state.data
    let amount = this.state.amount

    dataTemp.push({
        "name":this.refs.name.value,
        "cost":parseFloat(this.refs.cost.value),
        "count":0
    })

    amount = amount + parseFloat(this.refs.cost.value);

    dataTemp.map(element => {
        element.count = element.cost - amount/dataTemp.length
    })
    this.setState({data:dataTemp,amount:amount})
  }

  delItem(){
    let dataTemp = this.state.data
    let amount = this.state.amount

    
    if(dataTemp.length >= 1){
        let deletedItem = dataTemp.pop()
        console.log(deletedItem.cost)
        amount = amount - deletedItem.cost
        dataTemp.map(element => {
            element.count = (element.cost - amount/dataTemp.length).toFixed(2)
            console.log(element.count)
        })
    }
  
    this.setState({data:dataTemp,amount:amount})
  }

  handleInputChange(event){
    console.log(this.state.person)
  }

  render(){
    var taskList=this.state.data.map(listItem=>
      <ListItem name={listItem.name}
                cost={listItem.cost}
                count={listItem.count}/>
    )
    return(
        <div className="container">
        <div className="column column-50 column-offset-25">
            <label>Person:</label>
            <select type="text" placeholder="Name" ref="name">
            <option value="林建楠">林建楠</option>
            <option value="王芳">王芳</option>
            <option value="汪嘉伟">汪嘉伟</option>
            <option value="崔花妮">崔花妮</option>
            <option value="张伟">张伟</option>
            </select>
            <label>Cost:</label>
            <input type="number" placeholder="cost" ref="cost"/>
            <button onClick={this.addItem}>
                添加一个人
            </button>
            <button onClick={this.delItem}>
                删除一个人
            </button>
        </div>
        <table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>支出</th>
      <th>均摊</th>
    </tr>
  </thead>
  <tbody>
        {taskList}
        </tbody>
</table>
      </div>
    )
  }
}