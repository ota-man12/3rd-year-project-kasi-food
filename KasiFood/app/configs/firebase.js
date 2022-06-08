import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAoItW_XkOghHPQ6ctDKqZxbwYUFoSqEac',
	authDomain: 'kasifood2022.firebaseapp.com',
	projectId: 'kasifood2022',
	storageBucket: 'kasifood2022.appspot.com',
	messagingSenderId: '205062179031',
	appId: '1:205062179031:web:35ec602192f3079c720892',
	measurementId: 'G-HTKHKQX4YD',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, timestamp };
