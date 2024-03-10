import {
  Call,
  Instagram,
  Whatsapp,
  Youtube,
  Location,
  Facebook,
} from "iconsax-react";
import React from "react";
import { Email } from "./email";

export const Footer = () => {
  return (
    <section className="bg-primary">
      <div className="flex w-[88%] mx-auto py-[5rem] justify-between max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-10">
        {/* left side */}
        <div className="flex flex-col gap-4 text-white">
          <h2 className="underline-colored  text-2xl text-center w-fit font-bold">
            IndigoBraze
          </h2>
          <p className="max-w-[200px]">
            An online learning hub for Software Testing, Business Analysis, and
            Project Management.
          </p>
          <ul className="flex gap-2 items-center">
            <li>
              <a
                href="https://www.instagram.com/indigobraze?igsh=MTVmY3dha2VoeDhkbw=="
                target="_blank"
              >
                <Instagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+447730786494" target="_blank">
                <Whatsapp size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/indigobrazetechnologies"
                target="_blank"
              >
                <Facebook size={24} />
              </a>
            </li>
            <a
              href="https://x.com/IndigobrazeT?t=jHOnMoPrsnkhvKb-z9Lk6g&s=09"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                ></path>
              </svg>
            </a>
          </ul>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-5 text-white">
          <h4 className="font-semibold">Contact</h4>
          <ul className="flex flex-col gap-4">
            <a href="tel:+447730786494" className="flex items-center gap-2">
              <Call size={24} color="white" />
              <li>+44 7730 786494</li>
            </a>
            <a
              href="admin@indigobraze.co.uk"
              className="flex items-center gap-2"
            >
              <Email />
              <li>admin@indigobraze.co.uk</li>
            </a>
            <a href="https://www.google.com/maps/dir//Bartle+House+Oxford+Court,+Manchester+M2+3WQ,+UK/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x487bb1ea183342fd:0x7f69ec4e969c3e5d?sa=X&ved=2ahUKEwjb5qq8j-qEAxXCVEEAHfxqB8wQwwV6BAgdEAA" className="flex items-center gap-2">
              <Location size={24} color="white" />
              <li>Bartle House, Oxford Court, Manchester, United Kingdom.</li>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
};
