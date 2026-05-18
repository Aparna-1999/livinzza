import React from "react";
import { Logo } from "../atoms/Logo";
import { Typography } from "../atoms/Typography";
import { Globe, Users, Shield, Info, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-20 pb-10 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-6" />
            <Typography variant="p" className="mt-0 mb-8 max-w-xs text-sm text-slate-400">
              Safe, affordable, verified hostels near colleges - built for students and families.
            </Typography>
            <div className="flex gap-4">
              {[Globe, Users, Shield, Info].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/30 hover:text-white">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <Typography variant="h4" className="mb-6 text-base text-slate-100">Company</Typography>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/know-more" },
                { label: "Careers", href: "#" },
                { label: "Partner with Us", href: "/partner-with-us" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <Typography variant="h4" className="mb-6 text-base text-slate-100">Policies</Typography>
            <ul className="space font-normal space-y-4">
              {["Terms & Conditions", "Refund Policy", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <Typography variant="h4" className="mb-6 text-base text-slate-100">Contact</Typography>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-slate-100" />
                hello@livinnza.com
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-slate-100" />
                +91 98765 43210
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-slate-400">
          <Typography variant="small">
            © {new Date().getFullYear()} Livinnza. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
