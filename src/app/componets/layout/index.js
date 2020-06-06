import React from 'react';
import Header from "./Header";
import Content from "./Content";
import { CreateEvent } from "./../events"

const Layout = (props) => (
    <div>
        <Header appName={props.appName}>
            <CreateEvent></CreateEvent>
        </Header>
        <Content></Content>
    </div>
);

export default Layout;