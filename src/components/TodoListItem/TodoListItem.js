import React, {Component} from 'react';
import './todo-list-item.css'


class TodoListItem extends Component {

    render() {
        const { label,
                onDeleted,
                onToggleDone,
                onToggleImportant,
                important,
                done
                } = this.props;

        let className = 'todo-list-item d-flex';
        if (done) {
            className += ' done';
        }
        if (important) {
            className += ' important';
        }


        return (
            <span className={className}>
                <span
                    className="todo-list-item-label mr-auto"
                    onClick={onToggleDone} >
                        { label }
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant} >
                        <i className="fa fa-exclamation"/>
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                        <i className="fa fa-trash-alt"/>
                </button>
            </span>
        );
    }
}

export default TodoListItem;