import React from 'react';
import './../../static/css/app.css';
import { AppContext } from "../context";
import Layout from "./layout";

export default class App extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <AppContext.Provider>
                <Layout appName="Events"/>
            </AppContext.Provider>
        );
    }
}