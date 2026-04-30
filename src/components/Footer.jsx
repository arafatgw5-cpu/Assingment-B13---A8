import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 bg-base-200 text-base-content">
      {/* Top Section */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-10 text-center sm:px-6 md:grid-cols-3 md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">SkillSphere</h2>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 opacity-70 md:mx-0">
            Learn new skills anytime, anywhere. Build your future with us 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="transition hover:text-primary" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-primary" href="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-primary" href="/my-profile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="transition hover:text-primary" href="#">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="transition hover:text-primary" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-base-300 px-4 py-4 text-center text-xs sm:text-sm">
        © {new Date().getFullYear()} SkillSphere — All rights reserved.
      </div>
    </footer>
  );
}