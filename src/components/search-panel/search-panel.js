import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onLabelFilter = (e) => {
     const term =  e.target.value;
     this.setState({ term }); 
     this.props.onLabelFilter(term);
    
  }

  render() {
    return (
      <input type="text" 
              className="form-control search-input" 
              onChange={this.onLabelFilter}
              placeholder="search"
              value={this.state.term}/>
      )
    }
  }
