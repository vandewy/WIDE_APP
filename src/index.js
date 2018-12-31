import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './backend/database.js'

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {

      xIsNext: true
    };
  }


  render() {
    const db = '';

    return (
      <div>
        <div className="status">status was here</div>
        <div className="board-row">
          This is in the div!
        </div>
      </div>
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
ReactDOM.render(
  <Board />,
  document.getElementById('root')
);
