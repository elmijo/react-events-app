import React from "react";
import './../../../static/css/heder.css'

export default class Header extends React.Component {
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