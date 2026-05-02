"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <BookOpen size={20} />
            </div>
            <span className="text-xl font-bold">SkillSphere</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-gray-600 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-5 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}