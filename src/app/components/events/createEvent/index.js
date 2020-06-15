import React from "react";
import Modal from "./Modal";
import {AppContext} from "../../../context";
import api from "../../../lib/api";
import PropTypes from "prop-types";

export default class CreateEvent extends React.Component {
    static propTypes = {
        addEvent: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            addEvent: props.addEvent,
            isOpenModal: false,
            form: {
                label: null,
                description: null,
                categoryId: null,
                location: null,
                date: null,
            }
        };
        this.createEvent = this.createEvent.bind(this);
        this.validateField = this.validateField.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.form = React.createRef();
    }
    async createEvent(event) {
        event.preventDefault();
        if (!this.form.current.checkValidity()) {
            return [...this.form.current.elements].forEach((field) => {
                this.validateField(field);
            });
        }
        const result = await api.event.create(this.state.form);
        this.state.addEvent(result);
        this.hideModal();
        console.log("create: finished");
    }
    showModal() {
        this.setState({isOpenModal: true});
    }
    hideModal() {
        this.setState({
            isOpenModal: false,
            form: {
                label: null,
                description: null,
                categoryId: null,
                location: null,
                date: null,
            }
        });
    }
    validateField(event) {
        const field = event.target || event;
        field.classList[field.checkValidity()?'remove':'add']('invalid')
    }
    onChange(event) {
        const field = event.target;
        const { form }= this.state;
        form[field.name] = field.value;
        this.setState({ form });
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
                    <form ref={this.form} onSubmit={() => {}}>
                        <label htmlFor="label">Name</label>
                        <input
                            onBlur={this.validateField}
                            onChange={this.onChange}
                            type="text"
                            id="label"
                            name="label"
                            placeholder="Event name.."
                            value={this.state.label}
                            required />
                        <label htmlFor="description">Description</label>
                        <input
                            onBlur={this.validateField}
                            onChange={this.onChange}
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Event description.."
                            value={this.state.description}
                            required/>
                        <label htmlFor="categoryId">Description</label>
                        <select
                            onBlur={this.validateField}
                            onChange={this.onChange}
                            id="categoryId"
                            name="categoryId"
                            value={this.state.categoryId}
                            required>
                            <option value="">Select one category...</option>
                            <AppContext.Consumer>
                                {({ categories }) => (
                                    <>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.id}>{category.label}</option>
                                        ))}
                                    </>
                                )}
                            </AppContext.Consumer>
                        </select>
                        <label htmlFor="location">Location</label>
                        <input
                            onBlur={this.validateField}
                            onChange={this.onChange}
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Event location.."
                            value={this.state.location}
                            required />
                        <label htmlFor="date">Date</label>
                        <input
                            onBlur={this.validateField}
                            onChange={this.onChange}
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Event location.."
                            value={this.state.date}
                            required />
                    </form>
                </Modal>
            </div>
        );
    }
}