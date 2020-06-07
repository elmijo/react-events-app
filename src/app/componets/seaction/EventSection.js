import React from "react";
import { Event } from "./../events";
import {AppContext} from "../../context";
import './../../../static/css/section.css';
import SectionList from "./SectionList";

export default class EventSection extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ events }) => (
                    <SectionList title={this.props.title}>
                        {events.map((item, index) => <Event key={index} {...item} />)}
                    </SectionList>
                )}
            </AppContext.Consumer>
        );
    }
}