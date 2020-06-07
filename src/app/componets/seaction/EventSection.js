import React from "react";
import { Event } from "./../events";
import {AppContext} from "../../context";
import './../../../static/css/section.css';
import SectionList from "./SectionList";

export default class EventSection extends React.Component {
    render() {
        return (
            <>
                <AppContext.Consumer>
                    {({ upcoming }) => (
                        <SectionList title={this.props.title}>
                            {upcoming.map((item, index) => <Event key={index} {...item} />)}
                        </SectionList>
                    )}
                </AppContext.Consumer>
                <AppContext.Consumer>
                    {({ categoryEvents }) => (
                        <>
                            {categoryEvents.map((eventList, index) => (
                                <SectionList title={eventList.title} key={index}>
                                    {eventList.items.map((item, index) => <Event key={index} {...item} />)}
                                </SectionList>
                            ))}
                        </>
                    )}
                </AppContext.Consumer>
            </>
        );
    }
}