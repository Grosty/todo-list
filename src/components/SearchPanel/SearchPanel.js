import React, {Component} from 'react';
import './search-panel.css'

class SearchPanel extends Component {

    state = {
        label: ''
    };

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder={this.state.label}
                onChange={this.onToggleSearch}
            />
        );
    }
}

export default SearchPanel;