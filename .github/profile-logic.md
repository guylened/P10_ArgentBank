---
name: "#9 Profile Logic"
about: Issue for the profile logic
title: Logic for the profile feature
labels: ""
assignees: ""
---

Info:
The display of the page is conditional on the presence of the token/connection status
User data is displayed using the Redux store

Logic for the Edit User Name feature :

On the username editing form:

When clicking on Save:

- [ ] call API to modify username

If API response = OK :

- [ ] update userData of the redux store with the new username
- [ ] close the edit form
- [ ] automatic display of the new username on the profile page

If API response = KO :

- [ ] display error message

When clicking on Cancel:

- [ ] reset form
- [ ] close the editing form

For more information on accessing the design assets, see the [Design Assets section in the README](https://github.com/OpenClassrooms-Student-Center/ArgentBank-website#design-assets).
