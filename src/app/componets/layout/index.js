import React from 'react';
import Header from "./Header";
import Content from "./Content";
const Layout = (props) => (
    <div>
        <Header appName={props.appName}></Header>
        <Content></Content>
    </div>
);

export default Layout;