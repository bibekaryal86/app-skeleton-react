# react-spa-skeleton

* This is a template Repository to create a new React Single Page Application
* It uses React/Redux/Typescript/Webpack/Babel/Eslint/Prettier/Jest
* Things to update:
    * `public/index.html`
        * `title` -> set appropriate title for the new app
        * The `app-modal` div is for modal if needed. It can be left as is even if modal is not used in the app
    * `public/images/`
        * This folder is to store any images that the app might use
    * `package.json`
        * There will likely be many dependencies that need to be added/removed as required
        * The `scripts` will likely need to be added/removed
        * Update these fields:
            * `name`, `description`, `repository`, `keyworkds`, `homepage`
    * `amplity.yml`
        * Included if deploying to AWS Amplify
        * Even if deploying to AWS, this file is optional
        * Remove `gcp` folder if using this
    * `gcp` folder
        * Included if deploying to GCP AppEngine instead of AWS Amplify
        * Remove `amplify.yml` folder if using this
    * `Dockerfile`
        * Has extra installs for webpack, don't know why or how, just didn't work on previous app without it
        * Worked in Windows without those extra installs, does not work in Raspberry Pi without them
    * `variables.env`
        * update version and add endpoints as necessary
    * `webpack.dev.config.js`
        * update `devServer` -> `port`
        * update default `BASE_URL` in `EnvironmentPlugin`
        * Value for `BASE_URL` can be provided from CLI as `npm start -- --env base_url=DEV_URL`
    * `webpack.prod.config.js`
        * update default `BASE_URL` in `EnvironmentPLugin`
        * this configuration can be used for `docker`, `cloud` or other profiles
            * `BASE_URL` variable can be provided at build time from command line
                * `npm run build -- --env base_url=DOCKER_URL` OR `npm run build -- --env base_url=PROD_URL`
* Prettier and ESLint configurations are added by default
    * Should work out of the box with ESLint/Prettier plugins in IntelliJ/VSCode
    * In prettier, keep `lf` as `endOfLine` even if working in Windows only
* Jest configurations are added for testing
    * `--passWithNoTests` is added so that the test script would pass even if there are no tests in this skeleton
