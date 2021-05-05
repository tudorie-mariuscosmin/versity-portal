
// var firebaseConfig = {
//   apiKey: "AIzaSyA7V1RZBlluKpQQvhXNHm1YDMncZ6dVhJU",
//   authDomain: "softbinator-labs.firebaseapp.com",
//   projectId: "softbinator-labs",
//   storageBucket: "softbinator-labs.appspot.com",
//   messagingSenderId: "18702959524",
//   appId: "1:18702959524:web:c92e01b146b67c4a193731",
//   measurementId: "G-4RMB5HSX14"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();


import { useSelector, useDispatch } from 'react-redux'
import { login } from './store/user/user';

function App() {
  const state = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <div>
      {JSON.stringify(state)}
      <button onClick={() => dispatch(login())}>Click me</button>
    </div>

  );
}

export default App;
