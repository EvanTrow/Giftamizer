import { db, firebaseAuth } from '../config/constants';

export function signupWithEmail(email, pw, name) {
	return firebaseAuth()
		.createUserWithEmailAndPassword(email, pw)
		.then((user) => {
			saveUser(user, name);
		});
}

export function logout() {
	return firebaseAuth().signOut();
}

export function login(email, pw) {
	return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
	return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user, name) {
	console.log('signup', user, name);

	return db
		.collection('users')
		.doc(user.user.uid)
		.set({
			email: user.user.email,
			uid: user.user.uid,
			displayName: name,
			photoURL:
				'https://firebasestorage.googleapis.com/v0/b/giftamizer-trowbridge.appspot.com/o/profileImages%2FVMeJief8YndOGsIMsF9IU9ymdFq1?alt=media&token=a8b913be-a485-41a3-85d3-d2f770208f06',
		})
		.then(function () {
			console.log('Document successfully written!');
		})
		.catch(function (error) {
			console.error('Error writing document: ', error);
		});
}

export function getUserProfile() {
	var docRef = db.collection('users').doc(firebaseAuth().currentUser.uid);
	return docRef
		.get()
		.then(function (doc) {
			return doc.data();
		})
		.catch(function (error) {
			console.log('Error getting document:', error);
		});
}

export function checkAmount() {
	let user = firebaseAuth().currentUser;

	if (user) {
		let userUID = user.uid;
		let docRef = db.collection('users').doc(userUID);

		return docRef
			.get()
			.then((doc) => {
				//Note the return here
				if (doc.exists) {
					let name = doc.data().displayName;
					if (name) {
						return name; //Note the return here
					}
				} else {
					console.log('No such document!');
					//Handle this situation the way you want! E.g. return false or throw an error
					return false;
				}
			})
			.catch((error) => {
				console.log('Error getting document:', error);
				//Handle this situation the way you want
			});
	} else {
		//Handle this situation the way you want
	}
}
