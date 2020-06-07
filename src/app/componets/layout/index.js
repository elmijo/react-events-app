import React from 'react';
import Header from "./Header";
import Content from "./Content";
import { CreateEvent } from "./../events"
import { EventSection } from './../seaction'

const Layout = (props) => (
    <div>
        <Header appName={props.appName}>
            <CreateEvent></CreateEvent>
        </Header>
        <Content>
            <EventSection title={"All Events"} />
        </Content>
    </div>
);

export default Layout;