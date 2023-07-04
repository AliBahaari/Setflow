import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleSignIn = async () => {
    await signIn("credentials", {
      fullName: "Ali Bahaari",
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <Button onClick={handleSignIn}>Click to Check Your Credentials!</Button>
  );
};

export default SignIn;
