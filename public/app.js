///// User Authentication /////

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');


const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

var loggedIn = false;
auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
        loggedIn = true;
        var userInfo = user;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
        loggedIn = false;
    }
});


const db = firebase.firestore();
let refsRef = db.collection("refs");
let unsubscribe;
function uploadFile(files) {
    if(loggedIn === true) {
        const file = files.item(0);

        const storage = firebase.storage();
        const storageRef = storage.ref();
        const bradRef = storageRef.child("images/" + file.name);
        const task = bradRef.put(file)

        task.then(snapshot => {
            bradRef.getDownloadURL().then(url => {
                auth.onAuthStateChanged(user=> {
                    if (user) {
                        // signed in
                        refsRef.add({
                            uid: user.uid,
                            name: url,
                        });
                    }
                })
            })
        })


    }
}

unsubscribe = refsRef.onSnapshot(querySnapshot => {
    const items = querySnapshot.docs.map(doc => {
        return `<li><img src="${doc.data().name}"></li>`
    });
    thingsList.innerHTML = items;
});
