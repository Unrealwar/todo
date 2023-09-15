import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

    // state = {
    //     done: false,
    //     important: false, 
    // }

    // onLabelClick = () => {
    //     this.setState (({done}) => {
    //         return {
    //             done: !done
    //         };
    //     });
    // };
    // onMarkimportant = () => {
    //     this.setState (({important}) => {
    //         return {
    //             important: !important
    //         }
    //     });
    // };

    render() {
        const { label, onDeleted,onToggleImportant,onToggleDone,done, important} = this.props;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames +=' important';
        }
       
        return (
         <span className={classNames} >
            <span 
            className="todo-list-item-label" 
            onClick={onToggleDone }>
            { label }
            </span>
    
            <button type="button" 
                  className="btn btn-outline-success btn-sm right" 
                  onClick={onToggleImportant}>
            <i class="bi bi-exclamation-lg"></i>
          </button>
    
          <button type="button" 
                  className="btn btn-outline-danger btn-sm right"
                  onClick={onDeleted}>
            <i class="bi bi-trash"></i>
          </button>
        </span>
        )
    }
}


