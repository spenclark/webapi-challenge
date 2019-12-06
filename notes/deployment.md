# Deployment Notes

## Quote

> Developers get paid to deliver value, not lines of code.
>
> &mdash; A pragmatic developer

## Jargon

_"Single Responsibility Principle"_

Do one thing really well. Only one reason to change.

## Deployment

- extract configuration into environment variables.
- setup Continuous Deployment from GitHub to Heroku.
  - connect heroku to GitHub
    - create application
    - on `Deploy Tab` select Git Hub, answer yes to security prompt
    - search for the repository to connect
    - pick the brach to deploy
    - click `Enable Automatic Deploys`
    - scroll down and click the `Deploy Branch` button
  - commit and push to GH and the api gets updated on Heroku.
  - add a "start" script to `package.json` > `"start" : "node index.js"`
  - make the Port dynamic

## Git Stuff

### Switching Remotes

- `git remote set-url origin url to new empty repository on GH`
- `git remote -v` to see where your remotes point

### Cloning with Custom Folder Name
