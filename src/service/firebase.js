import firebase from 'firebase'

// TODO: You need to obtain following config by
//       1. Go to https://console.firebase.google.com/ and create a project
//       2. Choose "Add Firebase to your web app"
//       3. Copy and paste the code snippet for config


var config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_DOMAIN',
  databaseURL: 'YOUR_DB_URL',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
