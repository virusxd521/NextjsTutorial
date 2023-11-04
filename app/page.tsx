import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

import Link from 'next/link';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
    </main>
  );
}

// When you are building ui, it helps to have some placeholder data if a database or api is not yet available
// if you prefer writing traditional css rules or keeping your css seperate from you JSX css module is the way to go
// Using the clsx library to toggle class names

// Why optimize fonts?
// fonts are an integral part of any website.
// sometimes in the loading phase of the static assets the default font is being loaded first and after short amount of time the intended font will be loaded.
// layout shifts happens when the browser initially renders text in a fallback or system font and then swaps it out for a custom font once once it has been loaded.
// This swap can cause the text size, spacing, or layout to change, shifting elements around it.

// Why optimize fonts?
// Why optimize images?
// Why optimize navigation?
// Please describe what page.tsx or page .js is doing?
// Please do the same for layout.tsx
// what is colocation?
// what is partial rendering?
// please explain the following hook usePathname()
// Please explain Automatic code-splitting and prefetching
