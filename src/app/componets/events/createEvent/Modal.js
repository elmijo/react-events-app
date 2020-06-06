import React from "react";
import '../../../../static/css/modal.css';

export default class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return false;
        }
        return (
            <div className="modal-backdrop">
                <div className="modal" id="modal">
                    <h2>{this.props.title}</h2>
                    <div className="modal-content">{this.props.children}</div>
                    <div className="modal-actions">
                        <button className="create-button" onClick={this.props.onCreate}>Create</button>
                        <button className="cancel-button" onClick={this.props.onCancel}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}