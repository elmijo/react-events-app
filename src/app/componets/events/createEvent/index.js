import React from "react";
import Modal from "./Modal";

export default class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModal: false
        };
        this.createEvent = this.createEvent.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    createEvent(event) {
        event.preventDefault();
    }
    showModal() {
        this.setState({isOpenModal: true});
    }
    hideModal() {
        this.setState({isOpenModal: false});
    }
    render() {
        return (
            <div>
                <button onClick={this.showModal} className="right">New Event</button>
                <Modal
                    title="Create Event"
                    show={this.state.isOpenModal}
                    onCreate={this.createEvent}
                    onCancel={this.hideModal}>

                </Modal>
            </div>
        );
    }
}