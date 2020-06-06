import React from "react";
import "./../../../static/css/content.css"

export default class Content extends React.Component {
    render() {
        return (
            <div className="app-content">
                {this.props.children}
            </div>
        );
    }
}