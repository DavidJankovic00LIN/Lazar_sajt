"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1d1e37] h-16">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="/assets/foto/logo.webp"
              alt="ПСУ Јастреб лого"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            ПСУ ЈАСТРЕБ
          </span>
        </Link>

        {/* Right side: dropdown + constant links */}
        <div className="flex items-center gap-4 text-sm font-medium text-white">
          {/* Dropdown menu for sections on the homepage */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-md border border-white/20 px-3 py-1 text-xs uppercase tracking-wide hover:bg-white/10"
            >
              Мени
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-md bg-[#1d1e37] shadow-lg ring-1 ring-black/10">
                <ul className="py-1 text-sm">
                  <li>
                    <a
                      href="#about_us"
                      className="block px-4 py-2 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      О нама
                    </a>
                  </li>
                  <li>
                    <a
                      href="#org_misson"
                      className="block px-4 py-2 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Наша мисија
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about_work"
                      className="block px-4 py-2 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Групе
                    </a>
                  </li>
                  <li>
                    <a
                      href="#QandA"
                      className="block px-4 py-2 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Најчешћа питања
                    </a>
                  </li>
                  <li>
                    <a
                      href="#kontakt"
                      className="block px-4 py-2 hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Контакт
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Persistent links */}
          <div className="flex items-center gap-3">
            <Link
              href="/gallery"
              className="hover:text-zinc-200"
            >
              Галерија
            </Link>
            <Link
              href="/novosti"
              className="hover:text-zinc-200"
            >
              Новости
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}




