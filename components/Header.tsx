"use client";

import Link from "next/link";
import React from "react";
import { FaWallet, FaQuestionCircle } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import Profile from "@/components/Profile";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="p-4 max-w-full sm:max-w-md mx-auto flex items-center justify-between bg-gray-800 text-white">
      <Profile username={username} />
      <nav className="flex items-center space-x-4 sm:space-x-6">
        <button>
          <Link href="/wallet">
            <FaWallet className="text-xl sm:text-2xl" />
          </Link>
        </button>
        <button>
          <Link href="/faq">
            <FaQuestionCircle className="text-xl sm:text-2xl" />
          </Link>
        </button>
        <button>
          <Link href="/language">
            <MdOutlineLanguage className="text-xl sm:text-2xl" />
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
