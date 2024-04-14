"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export const Appbar = () => {
  const session = useSession();
  //const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </button>
      {JSON.stringify(session)}
    </div>
  );
};
