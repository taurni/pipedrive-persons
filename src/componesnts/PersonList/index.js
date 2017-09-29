import React, {Component} from 'react';
import Person from "../Person/index";
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

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
            items: this.props.persons
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({items: nextProps.persons})
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        if(this.state.items.length === 0){
            return(<h3 className="text-center">Didn't find anything.</h3>)
        }else {
            return (
                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={3}/>
            )
        }

    };
}

export default PersonList;