/* ============ config.js — YOUR OWN SERVER (optional) ============
 *
 * Leave this as `null` and the game runs WITHOUT a server: progress is saved
 * in the browser, no accounts, no friends, no co-op, no leaderboard.
 *
 * Paste YOUR OWN free Firebase config here and your copy of the game gets
 * accounts, friends, co-op with your friends and a leaderboard, all on YOUR
 * free Firebase project. Step-by-step guide: SERVER_SETUP.md
 *
 * These values are NOT secret: Firebase is designed to put them in a web page.
 * What protects your players' data are the security rules (SERVER_SETUP.md, step 4 and 5).
 *
 * It must look like this (keep the quotes and the commas):
 *
 * window.PS_FIREBASE = {
 apiKey: "AIzaSyBq73OiL25c4bUMLHb9UZsY7Rc90yhMOpI",
  authDomain: "pokesurvivorgame.firebaseapp.com",
  projectId: "pokesurvivorgame",
  storageBucket: "pokesurvivorgame.firebasestorage.app",
  messagingSenderId: "1066984884554",
  appId: "1:1066984884554:web:47bbc0e82e3e1b04ed59b3"
  databaseURL: 'https://pokesurvivorgame-default-rtdb.asia-southeast1.firebasedatabase.app'
};

