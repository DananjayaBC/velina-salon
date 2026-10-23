"use client";

import { useState } from "react";
import Logo from "./Logo";

const ArrowUpRight = () => (
  <svg viewBox="0 0 10 10" className="h-[8px] w-[8px]" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M2 8L8 2M3 2h5v5" />
  </svg>
);

const colA = ["Home", "Services +", "Gallery"];
const colB = ["About", "Testimonials", "Transformation"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-[20px] z-30 px-[22px] lg:top-[28px]">
      <div className="flex items-start justify-between lg:grid lg:grid-cols-[376px_188px_190px_1fr]">
        <Logo />

        {/* desktop / tablet link columns */}
        <nav className="tiny hidden flex-col gap-[5px] pt-[1px] md:flex">
          {colA.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
        <nav className="tiny hidden flex-col gap-[5px] pt-[1px] md:flex">
          {colB.map((l) => (
            <a key={l} href="#">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden items-start justify-between md:flex">
          <div className="tiny hidden flex-col gap-[5px] pt-[1px] lg:flex">
            <span>Contact</span>
            <span>(+123) 3245-98612</span>
          </div>
          <a href="#" className="tiny-link flex items-center gap-1 pt-[1px]">
            Book a appointment <ArrowUpRight />
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-[30px] w-[30px] flex-col items-end justify-center gap-[5px] md:hidden"
        >
          <span className={`block h-px w-[22px] bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-[22px] bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-[22px] bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="-mx-[22px] mt-[16px] grid grid-cols-2 gap-y-[20px] bg-[#1c1a17]/90 px-[22px] py-[24px] backdrop-blur-sm md:hidden">
          <nav className="tiny flex flex-col gap-[8px]">
            {colA.map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </nav>
          <nav className="tiny flex flex-col gap-[8px]">
            {colB.map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </nav>
          <div className="tiny flex flex-col gap-[5px]">
            <span>Contact</span>
            <span>(+123) 3245-98612</span>
          </div>
          <a href="#" className="tiny-link flex items-center gap-1 self-start">
            Book a appointment <ArrowUpRight />
          </a>
        </div>
      )}
    </header>
  );
}
