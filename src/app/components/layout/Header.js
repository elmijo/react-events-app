import React from "react";
import './../../../static/scss/components/header.scss'
import PropTypes from "prop-types";

export default class Header extends React.Component {
    static propTypes = {
        appName: PropTypes.string.isRequired,
    };
    render() {
        return (
            <header className="app-header">
                <div className="header-name">
                    {this.props.appName}
                </div>
                <div className="header-content">
                    {this.props.children}
                </div>
            </header>
        );
    }
}