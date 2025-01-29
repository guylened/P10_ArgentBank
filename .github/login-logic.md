---
name: "#7 Login Logic"
about: Issue for the login logic
title: Logic for the login feature
labels: ""
assignees: ""
---

Info: the server affiliates the token to the logged in user using their user id

Logic for the Login feature :

When submitting the form on the Sign in page :

- [ ] make the api call with the path: http://localhost:3001/user/login
      If API data check = OK :
  - [ ] store the connection state in the store (token)
  - [ ] retrieve user data
  - [ ] automatic redirection to the profile page
        If API data check = KO :
  - [ ] automatic redirection to the profile page

For more information on accessing the design assets, see the [Design Assets section in the README](https://github.com/OpenClassrooms-Student-Center/ArgentBank-website#design-assets).
