import * as React from "react";
import LoginPage from "@/components/pages/Login";
import SignUpPage from "@/components/pages/SignUp";
export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUpPage />
    </main>
  );
}
