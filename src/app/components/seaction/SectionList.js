import React from "react";
import './../../../static/scss/components/section.scss';
import PropTypes from "prop-types";
export default class SectionList extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };
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