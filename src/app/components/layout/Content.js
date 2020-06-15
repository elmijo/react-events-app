import React from "react";
import "./../../../static/scss/components/content.scss"

export default class Content extends React.Component {
    render() {
        return (
            <div className="app-content">
                {this.props.children}
            </div>
        );
    }
}