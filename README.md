# PAD+ 🚀🚀 Technical Documentation 🚀🚀

This repository holds sources for the [technical documentation](https://e-pshad.github.io/pad-doc/) of the PAD+ project. It also hosts some [static resources to help setup a PAD+ instance](./static/ressources/).

Other repositories :
 - [PAD+ sources](https://github.com/e-PSHAD/PAD): Moodle fork customized for PAD+
 - [PAD+ infrastructure](https://github.com/e-PSHAD/pad-infra): technical scripts to help deploy a PAD+ infrastructure

## Editing the Documentation

Documentation pages are stored as files in the `docs` folder and subfolders (for categories). They use the [Markdown format](https://docusaurus.io/docs/next/markdown-features) and can be edited in any text editor.

You can either:
- [edit a file directly through GitHub(https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)]
- or clone the repository locally, edit it, then commit and push your changes

```
git clone https://github.com/e-PSHAD/pad-doc
```

Once changes have been made with your favorite text editor:
```
git add .
git commit -m "your message"
git push origin main
```

The repository is configured to update the [doc website](https://e-pshad.github.io/pad-doc/) on main push. Specifically, the [deploy workflow](https://github.com/e-PSHAD/pad-doc/blob/main/.github/workflows/deploy.yml) is a GitHub Action which will run Docusaurus build task and publish the site on GitHub Pages.

## Local Doc Server for Build/Preview

To build/test the documentation website locally, you should install [Docusaurus tooling](https://docusaurus.io/docs/installation).

### Technical Requirements

Install node.js
```
$ sudo apt-get install curl

# Install nvm with
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
$ nvm ls

# Install the current stable LTS release of Node.js
$ nvm install --lts

# Install the current release of Node.js
$ nvm install node
```

Install yarn
```
$ curl -o- -L https://yarnpkg.com/install.sh | bash
```

Install Docusaurus
```
$ yarn install
```

### Start the Local Server

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```
$ yarn start
```

This is just a local preview! Don't forget to commit and push your changes if you want to share!
