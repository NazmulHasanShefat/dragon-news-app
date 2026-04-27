import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGitHubLogin = async (e) => {
    e.currentTarget.style.background = "#868686b5";
    const { data } = await authClient.signIn.social({
      provider: "github",
    });
    if (data) {
      e.currentTarget.style.background = null;
    }
  };
  const handleGoogleLogin = async (e) => {
    e.currentTarget.style.background = "#868686b5";
    const { data } = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      e.currentTarget.style.background = null;
    }
  };

  return (
    <>
      <button
        className="flex items-center gap-3 text-[18px] border border-gray-300 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white"
        onClick={handleGoogleLogin}
      >
        <FcGoogle /> Login with Google
      </button>
      <button
        className="flex items-center gap-3 text-[18px] border border-gray-300 text-black px-4 py-1 rounded-lg cursor-pointer mt-3 hover:bg-blue-500 hover:text-white"
        onClick={handleGitHubLogin}
      >
        <FaGithub /> Login with Github
      </button>
    </>
  );
};

export default SocialLogin;
