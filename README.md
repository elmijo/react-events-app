# React Events

This project is an implementation of simple event application to list, create and subscribe events using [React](https://es.reactjs.org/docs/context.html) (only using Context) and [json-server](https://github.com/typicode/json-server).

## Use Cases

* As user, I would like to access application and see list of events.
* As user, I would like to see events listed by categories, sorted by date, with the title being the category name.
* As user I would like to seAt the beginning  a separate title for "Highlighted Events", where I can see 5 random events. The events that appear in Highlighted Events, be excluded from the other category lists.
* As user, I would like to subscribe/unsubscribe to events.
* As user, I would like to Create an event. The form has to have this fields: Name, Description, Category, Location, Date. The possible categories are: Work, Sportive, Lunches, Voluntary service.

## Install

```bash
git clone https://github.com/ElMijo/react-events-app.git
cd react-events-app
mv .env.example .env.local
```

## Run application

```bash
yarn start
```

## Run Test

```bash
yarn test
```


