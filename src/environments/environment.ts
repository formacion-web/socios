// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url:'http://localhost:3000/',
  firebaseConfig : {
    apiKey: "AIzaSyCtPNmmVWvhGoVSPaJ6rjIDl8SvlPRoYz8",
    authDomain: "socios-web.firebaseapp.com",
    projectId: "socios-web",
    storageBucket: "socios-web.appspot.com",
    messagingSenderId: "200218642099",
    appId: "1:200218642099:web:6be918cbf612ec04c8d2c6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
