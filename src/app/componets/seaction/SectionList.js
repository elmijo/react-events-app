import React from "react";
import './../../../static/scss/components/section.scss';
export default class SectionList extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <div className="section-list">
                <h2>{title}</h2>
                <div className="section-items">
                    {this.props.children}
                </div>
            </div>
        );
    }
}