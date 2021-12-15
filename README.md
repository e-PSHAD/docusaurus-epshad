## PAD+ 🚀🚀 Technical documentation 🚀🚀

[Pad-doc](https://e-pshad.github.io/pad-doc/) contains the full technical documentation of the [PAD+ project](https://github.com/e-PSHAD/PAD).


### 1. Technical requirements (WSL)

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

### 2. Cloning the repository

* Above the list of files, click **Code**.
* Copy HTTPS address.
* Open Terminal Git Bash.
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and then paste the URL you copied earlier.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
* Press Enter to create your local clone.


### 3. How to collaborate?

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
```
$ yarn start
```

Once changes have been made:
```
git add .
git commit -m "your message"
git push origin main
```

### 4. Deploying to GitHub Pages

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

#### Start with [pad-doc](https://e-pshad.github.io/pad-doc/)! 🚀🚀🚀🚀
