## Toshi's Playground

Deployed on netlify
[Toshi Land](https://toshi-land.netlify.app/)

A Nextjs environment for like...no reason.

Configured with:

- [nextjs 13](https://nextjs.org/docs) w/ [rust compiler](https://nextjs.org/docs/advanced-features/compiler) (no babel)
- [React18](https://reactjs.org/blog/2022/03/29/react-v18.html) with [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
- CSS with using [tailwind](https://tailwindcss.com/) & nextjs built in [css modules](https://github.com/css-modules/css-modules)
- Testing with [jest](https://jestjs.io/) & [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- Uses [Yarn](https://yarnpkg.com/getting-started)

### Programming Requirements

- Node
- vsCode
- github
- [github ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Yarn package manager](https://yarnpkg.com/)

### Project setup

(terminal commands)

Using your terminal, go to the location where you will store your project locally, download the repo:

#### Toshi note:

> I use a flolder call unicorn for all my personal projects, each folder is a different git project.
> If you need different git configs between work and personal this is where you would put it.

```bash
-unicorn/
  .gitconfig(personal) if needed
  --Toshis-Playground/
  --other-git-project/
```

#### Clone Repo

Clone the repo. Using a github ssh key makes using git far easier and is best practice. [github ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```bash
git clone git@github.com:idcargill/Toshis-Playground.git
```

#### Install Dependencies (project setup)

Go into the new project folder to make it your current working directory:

```bash
cd Toshis-Playground
```

install the project dependencies:

```bash
yarn
```

To start the development server run:

#### Start Development Server

```bash
yarn dev
```

In any browser go to:

> localhost:3000

#### Editing the project

If you are able to see the welcome screen in your browser then you are ready to fuck around and find out.

Webpages are located in the pages directory: index is always the home page.

> src/pages

Page components are located in the sections directory

> src/sections/HomePage

### Git Workflow

Note: The main branch is locked, you must work on a new branch, push it up to github, then merge it into main.

From the Toshis-Playground folder, pull in the latest changes.

```bash
git checkout main
git pull
```

Make a new branch to experiment on

```bash
git checkout -b <NAME YOURE BRANCH>
```

To push up changes

```bash
# see what changed
git status

# add files to be pushed up
git add . <or file name>

# commit changes
git commit -m "TYPE A SHORT MESSAGE ABOUT WHAT YOU DID"

# Push up to the remote
git push

```

#### Github

- Now on github you can review the changed branch.
- If there are not merge conflics you can merge your branch into main. This will trigger a rebuild of the site on netlify. Any changes to Main will rebuild the deployment.

Good hunting
