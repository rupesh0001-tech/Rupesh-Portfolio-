import Link from "next/link";

import { FileText, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="mt-6 flex gap-4">
      <Link
        href="https://www.linkedin.com/in/rupeshjagtap/"
        target="_blank"
        className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white shadow-[0_4px_0_0_#0a0a0a] transition-all duration-300 hover:translate-y-[2px] hover:bg-neutral-800 hover:shadow-[0_2px_0_0_#0a0a0a] active:translate-y-[4px] active:shadow-none"
      >
        <Send size={16} /> Hire Me
      </Link>
      <Link
        href="mailto:rupeshjagtap157@gmail.com"
        className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-black shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[2px] hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none"
      >
        <Send size={16} /> Get in touch
      </Link>
    </div>
  );
};

export default GetInTouch;
