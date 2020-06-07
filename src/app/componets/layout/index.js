import React from 'react';
import Header from "./Header";
import Content from "./Content";
import { CreateEvent } from "./../events"
import { EventSection } from './../seaction'
import {AppContext} from "../../context";

const Layout = (props) => (
    <div>
        <Header appName={props.appName}>
            <AppContext.Consumer>
                {({addEvent}) => (
                    <CreateEvent addEvent={addEvent}></CreateEvent>
                )}
            </AppContext.Consumer>
        </Header>
        <Content>
            <EventSection title={"Upcoming Events"} />
        </Content>
    </div>
);

export default Layout;