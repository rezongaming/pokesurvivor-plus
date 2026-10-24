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
 apiKey: "AIzaSyAdHeHpU0GxSVim-KViCX0kx2JFlZcXGgc",
  authDomain: "pokesurvivor-6e770.firebaseapp.com",
  projectId: "pokesurvivor-6e770",
  storageBucket: "pokesurvivor-6e770.firebasestorage.app",
  messagingSenderId: "991108498675",
  appId: "1:991108498675:web:5a3978364e4ae02248e386"
  databaseURL: 'https://pokesurvivor-6e770-default-rtdb.asia-southeast1.firebasedatabase.app'
};

