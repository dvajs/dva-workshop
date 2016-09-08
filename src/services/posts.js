import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCm9ablmomM4Y34LJYjzd92G9nzpkLnvKQ",
  authDomain: "dva-workshop.firebaseapp.com",
  databaseURL: "https://dva-workshop.firebaseio.com",
  storageBucket: "dva-workshop.appspot.com",
};
firebase.initializeApp(config);
const database = firebase.database();

export async function fetchPosts() {
  const snapshot = await database.ref('/posts').orderByKey().once('value');
  return snapshot.val();
}

export async function fetchPost(key) {
  const snapshot = await database.ref(`/posts/${key}`).once('value');
  return snapshot.val();
}

export async function createPost(post) {
  const newPostKey = database.ref().child('posts').push().key;
  await database.ref().update({
    [`/posts/${newPostKey}`]: post,
  });
  return newPostKey;
}

export function deletePost(key) {
  return database.ref(`/posts/${key}`).remove();
}

export function watchPosts(cb) {
  let first = true;
  function handler(snapshot) {
    if (first) {
      first = false;
    } else {
      cb(snapshot.val());
    }
  }
  const ref = database.ref('/posts');
  ref.on('value', handler);
  return () => {
    ref.off('value', handler);
  };
}
