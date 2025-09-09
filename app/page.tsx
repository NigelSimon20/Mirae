"use client";

import Link from "next/link";

export default function MiraeDownload() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white p-6">
      <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
          Mirae
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {/* iOS Download */}
          <Link
            href="#" 
            // target="_blank"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/15 backdrop-blur-md border-2 border-white/30 text-lg font-medium min-w-[180px] transition-all hover:bg-white/25 hover:border-white/50 shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </Link>

          {/* Android Download */}
          <Link
            href="https://expo.dev/artifacts/eas/tpCBMkVg5asSuU3ZdyifiB.apk"
            // target="_blank"
            download
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/15 backdrop-blur-md border-2 border-white/30 text-lg font-medium min-w-[180px] transition-all hover:bg-white/25 hover:border-white/50 shadow-md"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.7379 13.8679 8.1538 11.9999 8.1538s-3.5902.5841-5.1772 1.6165L4.8004 6.4693a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 12.0581.8934 15.5 .8934 19.5h22.2132c0-4-1.7955-7.4419-5.1856-9.1786z" />
            </svg>
            Download for Android
          </Link>
        </div>
      </div>
    </div>
  );
}
