# Find My Events

# Project Find my events

## Description

You are a web developer at a company called FindMyMovies. The company has
decided to launch a new app called FindMyEvents where users can view and add
upcoming events in their region. Backend development has been outsourced and
frontend will be developed in-house. During sprint planning, you agree to lead
this project and develop an app that will let users find events using APIs that
backend engineers will provide. The tasks you are responsible for:

- Building the application in React
- Setting up a JSON server for testing until backend APIs are ready
- Managing the state using Redux

## Checklist

### You must use the following tools:

- [x] React: To build the application

- [x] Redux: To manage the state of components in the application

- [x] Redux Thunk: To manage the async flow

- [x] JSON Server: To build a placeholder backend for app development and
      testing

- [x] React Router: To navigate within the app using URL links

- [x] Bootstrap: To accelerate the development

### Following requirements should be met:

- [x] The app should be responsive.

- [x] There should only be one source of truth for state management.

- [x] The app should have functionalities for users to:
  - [x] create events
  - [x] view events
  - [x] delete events

# Prerequisities

To install and run application, you need NodeJS 18+.

# Run

## server

To run the server, use script "server":

```
yarn server
```

or

```
npm run server
```

Database is stored in `src/database.json` file.

## web app

To run application, user "start" script:

```
yarn start
```

or

```
npm run start
```

## Login

Log in by clicking the "Log in" button on navigation bar and use one of these
login e-mails:

- user1@example.com
- user2@example.com
- user3@example.com
- user4@example.com
- user5@example.com

After log in the name of the user is displayed on navigation bar.

## Listing events

Each user can see listed events on the homepage. In addition to basic
information they can see that each event has colored upper bar. Each color is
assigned to one event type (Music, Theatre, Art, Sport, Education). The same
color is used when click on "More information" and the modal with all of the
information is displayed. If the user is logged in, they can see also delete
button on those events they created.

## Creating new event

Only logged in users can create a new event. All of the fields are required, so
don't forget to choose the region and type of the event.

## Delete event

Event is deleted by clicking on the delete button, which is displayed only to
logged in users and only on events created by this particular user.

## Logout

User can log out the app by clicking the Log out button on navigation bar.

## 404

Error screen for 404 etc. is included in the project.
