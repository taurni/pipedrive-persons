import React, {Component} from 'react';
import Person from '../Person/index';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { getPersons } from '../utils/apiConnection';

const SortableItem = SortableElement(({value}) => <Person {...value} />);

const SortableList = SortableContainer(({items}) => {
    return (
        <div>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value}/>
            ))}
        </div>
    );
});

class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.fetchPersons();
    }

    fetchPersons = () => {
        getPersons()
            .then((persons) => this.setState({items: persons}))
            .catch((err) => console.log(err));
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={3}/>
    };
}

export default PersonList;