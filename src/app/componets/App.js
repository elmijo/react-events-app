import React from 'react';
import './../../static/css/app.css';
import { AppContext } from "../context";
import Layout from "./layout";
import api from "../lib/api";
import {excludeEvents, groupEvents, orderEvents, randomItems} from "../lib/helper";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            upcoming: [],
            categoryEvents: [],
        }
    }

    async componentDidMount() {
        const categories = await api.category.list();
        const events = await api.event.list();
        const upcoming = orderEvents(randomItems(events, 3));
        const categoryEvents = groupEvents(excludeEvents(events, upcoming)).map((group, index) => ({
            title: categories[index].label,
            items: orderEvents(group)
        }));
        this.setState({ events, categories, upcoming, categoryEvents });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Layout appName="Events"/>
            </AppContext.Provider>
        );
    }
}