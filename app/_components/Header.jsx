"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";
import { ContactRoundIcon, LayoutDashboard, Menu } from "lucide-react";

function Header() {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-6 lg:px-12 xl:px-18 2xl:px-24 p-2 md:p-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          unoptimized
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={0}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden rounded text-black px-2 py-1 sm:flex items-center gap-4">
        {user ? (
          <>
            {/* Contact Button */}
            <button
              className="flex border-2 border-gray-100 p-2 rounded-lg bg-purple-500 text-white items-center gap-2 hover:bg-black cursor-pointer transition"
              onClick={() => router.push("/contact")}
            >
              <ContactRoundIcon size={20} />
              <span>Contact</span>
            </button>
            {/* Dashboard Button */}
            <button
              className="flex border-2 border-gray-100 p-2 rounded-lg bg-sky-500 text-white items-center gap-2 hover:bg-black cursor-pointer transition"
              onClick={() => router.push("/dashboard")}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </button>

            {/* Clerk UserButton */}
            <UserButton signOutOptions={{ redirectUrl: "/" }} />
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 border-2 border-gray-500 bg-sky-500 p-2 rounded-lg cursor-pointer hover:text-white hover:bg-black transition"
          >
            <Image
              className="rounded-full"
              src={"/user_icon.png"}
              width={32}
              height={32}
              alt="user icon"
              unoptimized
            />
            <span>Account</span>
          </button>
        )}
      </ul>

      {/* Mobile Menu Button (Visible only on small screens) */}
      <button
        className="sm:hidden p-2 border-2 border-gray-500 rounded-lg bg-sky-500 text-white hover:bg-black transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-white shadow-md border rounded-lg p-4 flex flex-col gap-2 sm:hidden">
          {user ? (
            <>
              <button
                className="flex border-2 border-gray-100 p-2 rounded-lg bg-purple-500 text-white items-center gap-2 hover:bg-black cursor-pointer transition"
                onClick={() => {
                  router.push("/contact");
                  setMenuOpen(!menuOpen);
                }}
              >
                <ContactRoundIcon size={20} />
                <span>Contact</span>
              </button>
              <button
                className="flex border-2 border-gray-100 p-2 rounded-lg bg-sky-500 text-white items-center gap-2 hover:bg-black cursor-pointer transition"
                onClick={() => {
                  router.push("/dashboard");
                  setMenuOpen(!menuOpen);
                }}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </button>
              <div className="flex items-center mx-auto gap-2">
                <span className="text-sm font-medium">
                  {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
                </span>
                <UserButton signOutOptions={{ redirectUrl: "/" }} />
              </div>
            </>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 border-2 border-gray-500 bg-sky-500 p-2 rounded-lg cursor-pointer hover:text-white hover:bg-black transition"
            >
              <Image
                className="rounded-full"
                src={"/user_icon.png"}
                width={32}
                height={32}
                alt="user icon"
                unoptimized
              />
              <span>Account</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
