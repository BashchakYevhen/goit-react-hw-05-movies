// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmVHyq-h0CRUBlWFc4KWrKQTC6foX3Q-E',
  authDomain: 'filmoteka-92c95.firebaseapp.com',
  projectId: 'filmoteka-92c95',
  storageBucket: 'filmoteka-92c95.appspot.com',
  messagingSenderId: '1034278354535',
  appId: '1:1034278354535:web:04542887df86c3714c1ec2',
  measurementId: 'G-8WGDP14GMJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
