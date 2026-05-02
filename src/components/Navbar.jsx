"use client";

import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  // const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/";
        },
      },
    });
  };

  return (
    <nav className="bg-base-200 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        SkillSphere
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/my-profile">My Profile</Link>

        {/* {isPending ? ( */}
          <span className="loading loading-spinner loading-sm"></span>
        {/* ) : session?.user ?  */}
        {/* ( */}
          <>
            <img
              src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />

            <button onClick={handleLogout} className="btn btn-sm btn-error text-white">
              Logout
            </button>
          {/* </>
        // ) : (
          <> */}
            <Link href="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm btn-warning">
              Register
            </Link>
          </>
        {/* )} */}
      </div>
    </nav>
  );
}