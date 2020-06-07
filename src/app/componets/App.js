import React from 'react';
import './../../static/css/app.css';
import { AppContext } from "../context";
import Layout from "./layout";
import api from "../lib/api";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    async componentDidMount() {
        const events = await api.event.list();
        this.setState({ events });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Layout appName="Events"/>
            </AppContext.Provider>
        );
    }
}