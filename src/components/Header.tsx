"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  /** Close the desktop dropdown and drop focus so it doesn't stay open after navigation. */
  const closeMenus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpenMenu(null);
    e.currentTarget.blur();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname.split("/")[1] === href.split("/")[1];

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="bg-brand text-white text-[0.8rem]">
        <div className="container-x flex h-9 items-center justify-between gap-4">
          <p className="truncate">
            <span className="text-white">Motto</span> · {site.motto}
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="hidden sm:inline-flex items-center gap-1.5 hover:underline">
              <Phone size={13} aria-hidden="true" /> {site.phone}
            </a>
            <a href={site.staffLogin} target="_blank" rel="noreferrer" className="hover:underline">
              Staff login
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-line bg-paper/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_-18px_rgba(0,162,232,0.45)]" : ""
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const isOpen = openMenu === item.label;
                return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => item.children && setOpenMenu(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
                  }}
                  onKeyDown={(e) => e.key === "Escape" && setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[0.9rem] font-medium transition-colors hover:text-brand xl:px-3 ${
                      isActive(item.href) ? "text-brand" : "text-ink-900"
                    }`}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={item.children ? isOpen : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`absolute left-0 top-full pt-2 transition-all duration-150 ${
                        isOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <ul
                        className={`rounded-lg border border-line bg-paper p-2 shadow-[0_24px_60px_-24px_rgba(0,162,232,0.45)] ${
                          item.children.length > 6 ? "grid w-[34rem] grid-cols-2" : "w-72"
                        }`}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenus}
                              className={`block rounded-md px-3 py-2 text-[0.9rem] hover:text-brand ${
                                pathname === child.href ? "text-brand font-semibold" : "text-ink-900"
                              }`}
                            >
                              {child.label}
                              {child.blurb && (
                                <span className="mt-0.5 block text-[0.78rem] leading-snug text-ink-600">{child.blurb}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="hidden sm:inline-flex items-center whitespace-nowrap rounded-full border border-brand bg-brand text-white hover:bg-white hover:text-brand px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Apply for admission
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand hover:bg-brand hover:underline lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-brand/60"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-y-0 right-0 flex w-[min(22rem,100%)] flex-col bg-paper shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-5" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) close(); }}>
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-brand hover:underline"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((item) => (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-medium hover:text-brand"
                            aria-expanded={mobileSection === item.label}
                            onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                          >
                            {item.label}
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`}
                              aria-hidden="true"
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileSection === item.label && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden border-l-2 border-brand ml-4 pl-2"
                              >
                                {item.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={close}
                                      className="block rounded-md px-3 py-2.5 text-[0.95rem] text-ink-600 hover:text-brand"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link href={item.href} onClick={close} className="block rounded-md px-3 py-3 font-medium hover:text-brand">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-line p-5 space-y-3">
                <Link
                  href="/admissions"
                  onClick={close}
                  className="flex items-center justify-center rounded-full bg-brand px-5 py-3 font-semibold text-white"
                >
                  Apply for admission
                </Link>
                <a href={site.phoneHref} className="flex items-center justify-center gap-2 text-sm text-ink-600">
                  <Phone size={14} aria-hidden="true" /> {site.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
