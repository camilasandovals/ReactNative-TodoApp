import { useState } from "react";
import { Center, Box, Input, Button, Text } from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fbConfig.js";

export default function Login({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            setUser(res.user);
        })
        .catch(err => {
            console.log(err);
        }
    )};
};