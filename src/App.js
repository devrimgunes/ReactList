import React from 'react';
import profile1 from './image/1.jfif';
import profile2 from './image/2.jfif';
import profile3 from './image/3.jfif';

const list = [{name: "Devrim", surname: "Güneş", age: 24, img: profile1},
              {name: "Zeynep", surname: "Güneş", age: 19, img:profile2},
              {name: "Ali", surname: "Güneş", age: 30, img:profile3}
             ];

class App extends React.Component {

  state = {index:0}

  incrementIndex = (i) => {
    if((i > 0 && this.state.index < 2) ||(i < 0 && this.state.index > 0) ) {
      this.setState({index: this.state.index+i})
    }
  }

  render() {
    return(
      <div className="container">
        <table className="table text-center table-success" style={{width: 400}}>
          <tr>
            <td>
              <button type="button" className="btn btn-success text-success" onClick={()=> {this.incrementIndex(-1);}}>click</button>
            </td>
            <td>
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">{list[this.state.index].name}</li>
                <li className="list-group-item list-group-item-action">{list[this.state.index].surname}</li>
                <li className="list-group-item list-group-item-action">{list[this.state.index].age}</li>
                <li className="list-group-item list-group-item-action"><img src={list[this.state.index].img} /></li>
              </ul>
            </td>
            <td>
              <button type="button" className="btn btn-success text-success" onClick={()=> {this.incrementIndex(1);}}>click</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
