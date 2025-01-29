---
name: "#10 RememberMe Logic"
about: Issue for the RememberMe logic
title: Logic for the RememberMe feature
labels: ""
assignees: ""
---

Logic for the RememberMe feature :

When the user logs in:

      if box is checked (default value) :

      - [ ] state rememberMe is true

      if box is unchecked :

      - [ ] state of RememberMe returns "false" and deletes the email if it existed

At user logout:

      If state rememberMe is true :

      - [ ] the user's email is stored in store redux and becomes the default value of the email field of the login form

For more information on accessing the design assets, see the [Design Assets section in the README](https://github.com/OpenClassrooms-Student-Center/ArgentBank-website#design-assets).
