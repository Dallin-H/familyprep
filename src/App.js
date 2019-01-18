import React, { Component } from 'react';
import './App.css';
import Item from './Components/Item'

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: [
        {
          name: '',
          description: '',
          id: 0
        }
      ],
      newItem: '',
      newDescription: ''
    }
  }
  // methods here:
  // handleUpdateName(value){
  //   this.setState({newItem: value})
  // }

  // handleUpdateDescription(value){
  //   this.setState({newDescription: value})
  // }

  // handleAddToList(){
  //   let newObj = {}
  //   newObj.name= this.state.newItem;
  //   newObj.newDescription= this.state.newDescription;

  //   this.state.itemsList.push(newObj)

  //   this.setState({newItem: ''})
  //   this.setState({newDescription: ''})
  // }



  render() {
    const mappedItems = this.state.itemsList.map((eachObj) => {
      return <Item key={eachObj.id} name={eachObj.name}
        description={eachObj.description}
        id={eachObj.id}
      />
    })

    return (
      <div className="App" >
        <h1
          style={{ height: '5vh', width: '50vw', background: 'lightgrey', border: "1px black solid", margin: '15px auto', paddingBottom: '10px' }}>
          Grocery List
        </h1>
        {/* <input onChange={(e) => this.handleUpdateName(e.target.value)}
        placeholder={'ie: apples'}
        />
        <input onChange={(e) => this.handleUpdateDescription(e.target.value)}/>
        <button onClick={() => this.handleAddToList()}>Add item to list</button> */}
        <div
          style={{ height: '80vh', width: '20vw', background: 'lightblue', border: '1px black solid', margin: '15px auto', paddingTop: '15px' }}>
          {mappedItems}
        </div>
      </div>
    );
  }
}

export default App;
