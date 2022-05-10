# Digital Overdose Website

## Cloning the repository

```bash
git clone https://github.com/UnigeCN2GT1/unigecn2gt1.github.io
cd unigecn2gt1.github.io
npm install
```

## Deploying

```bash
ng build prod
cp dist/unigecn2gt1/browser/index.html dist/unigecn2gt1/browser/404.html
git add .
git commit
git push
./update-gh-pages.sh
```

## Table of Contents

- [Cloning the repository](#cloning-the-repository)
- [Development Specific Information](#development-specific-information)
  - [Running the Dev Local Server](#development-server)
  - [Adding code to the project scaffold](#adding-code-to-the-project-scaffold)
- [Angular Specific Information](#angular-specific-information)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)

## Development Specific Information

### Prerendering the files for deployment

Run `npm run prerender` ! Past Nicos bids you hello.

___

### Adding code to the project scaffold

Run `ng generate component path/to/component-name --module=<parent-module-name>` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

___

### Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

___

### Serving the site to GitHub Pages

From the finalized `main` branch, run the `./update-gh-pages.sh` command in your Git terminal.

___

### Compiling the documentation

Run the `compodoc -p tsconfig.app.json` command in your terminal to compile the documentation. It can be viewed in `/documentation`.

For a live documentation site, run the `compodoc -p tsconfig.app.json src -s` command in your terminal and visit [http://127.0.0.1:8080](`http://127.0.0.1:8080`) in your browser.

___

## Angular Specific Information

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

___

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
