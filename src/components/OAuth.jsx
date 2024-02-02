import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import LoginPageWebStyles from "@/modules/login/web/LoginWeb.module.css";
// import { useNavigate } from "react-router-dom";
import Image from "next/image";
import { CHFlex } from "./CFlex";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
// import {
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
//   FacebookAuthProvider,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";

// export default function OAuth() {
//   const dispatch = useDispatch();
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   // const navigate = useNavigate();
//   const handleGoogleClick = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const auth = getAuth(app);
//       const result = await signInWithPopup(auth, provider);
//       const res = await fetch("http://localhost:3000/api/auth/google", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: result.user.displayName,
//           email: result.user.email,
//           photo: result.user.photoURL,
//         }),
//       });
//       const data = await res.json();
//       dispatch(signInSuccess(data));
//       redirect("/dashboard");
//     } catch (error) {
//       console.log("Could not sign in with google", error);
//     }
//   };
//   const signinWithGoogle = () => {
//     console.log("clocker");
//     signInWithPopup(auth, provider)
//       .then(async (result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         // dispatch({ type: "AUTHENTICATION", payload: true });
//         // navigate("/chat");
//         const user = result.user;
//         console.log(user);
//         const res = await fetch("http://localhost:3000/api/auth/google", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: result.user.displayName,
//             email: result.user.email,
//             photo: result.user.photoURL,
//           }),
//         });
//         const data = await res.json();
//         dispatch(signInSuccess(data));
//         redirect("/dashboard");
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle Errors here.
//         // const errorCode = error.code;
//         // const errorMessage = error.message;
//         // // The email of the user's account used.
//         // const email = error.customData.email;
//         // // The AuthCredential type that was used.
//         // const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };
//   return (
//     <button
//       type="button"
//       onClick={signinWithGoogle}
//       className={`${LoginPageWebStyles.googleTabDiv} ${LoginPageWebStyles.roundedDiv}`}
//     >
//       <CHFlex
//         // className={`${LoginPageWebStyles.googleTabDiv} ${LoginPageWebStyles.roundedDiv}`}
//         sx={{ gap: "0.75rem" }}
//       >
//         <Image
//           src="/images/google-icon.png"
//           alt="google"
//           width="16"
//           height="16"
//         />
//         <p className={`${LoginPageWebStyles.secondaryText}`}>
//           Sign in with Google
//         </p>
//       </CHFlex>
//     </button>
//   );
// }

export default function OAuth() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const router = useRouter();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      // navigate("/dashboard");
      router.push("/dashboard");
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className={`${LoginPageWebStyles.googleTabDiv} ${LoginPageWebStyles.roundedDiv}`}
    >
      <CHFlex
        // className={`${LoginPageWebStyles.googleTabDiv} ${LoginPageWebStyles.roundedDiv}`}
        sx={{ gap: "0.75rem" }}
      >
        <Image
          src="/images/google-icon.png"
          alt="google"
          width="16"
          height="16"
        />
        <p className={`${LoginPageWebStyles.secondaryText}`}>
          Sign in with Google
        </p>
      </CHFlex>
    </button>
  );
}
