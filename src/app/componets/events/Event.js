import React from "react";
import './../../../static/css/event.css';
import api from "../../lib/api";

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            label: props.label,
            description: props.description,
            location: props.location,
            date: props.date,
            categoryId: props.categoryId,
            subscribed: props.subscribed || false,
        };
        this.subscribe = this.subscribe.bind(this);
    }

    async subscribe() {
        const { id, subscribed } = this.state;
        const event = await api.event.subscribe(id, !subscribed);
        this.setState({ ...event });
    }

    render() {
        const checkboxId = `subscribed-${this.state.id}`;
        return (
            <div className="event item">
                <h3>{this.state.label}</h3>
                <span className="label">{this.state.date}</span>
                <div className="content">
                    <p>{this.state.location}</p>
                    <p>{this.state.description}</p>
                </div>
                <div className="actions">
                    <input type="checkbox" id={checkboxId} onChange={this.subscribe} checked={this.state.subscribed}/>
                    <label htmlFor={checkboxId}>Suscrito</label>
                </div>
            </div>
        );
    }
}