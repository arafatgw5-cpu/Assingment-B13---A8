"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link href="/">Home</Link>
      <Link href="/courses">Courses</Link>
      <Link href="/my-profile">My Profile</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-base-200 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-xl font-bold">
          SkillSphere
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-base-300 px-5 py-4 text-sm font-medium md:hidden">
          {links}
        </div>
      )}
    </nav>
  );
}