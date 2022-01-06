* From what I've found deploying react/node app to GCP is not as straightforward as deploying Java app
* Use the following steps to deploy to GCP AppEngine
    * `npm run build` to create a production build in the `build` folder
    * copy the `build` folder to this `gcp` folder
    * rest of the steps will be done in the browser in GCP console
    * create an app engine project, add billing, etc
    * browse into the project, and activate cloud shell (click the shell icon on top right corner)
    * Upload this `gcp` folder to the home directory (the directory where shell starts in, or use `cd` enter)
    * after upload is complete, `cd` to browse to the gcp folder in cloud. The folder content should be same as locally
    * Deploy using `gcloud app deploy app.yaml`
    * There are likely better ways to do this !?!
* The above steps are from this page:
    * https://ahmed-ziane.medium.com/deploy-a-react-js-app-on-google-cloud-platform-gcp-4609046349a5
  
