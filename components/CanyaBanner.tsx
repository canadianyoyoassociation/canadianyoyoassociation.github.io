"use client";

import { usePathname } from "next/navigation";
import { Image } from "react-bootstrap";

export default function CanyaBanner() {
  const pathname = usePathname();

  // Do not show the banner except on the home page
  if (!new Set(["/", "/index", "/index.html"]).has(pathname)) return;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-4"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/assets/web_bg_v2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        id="banner-logo"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/2026natslogo.png`}
        alt="2026 Canadian Nationals Logo"
      />
      <h1 className="mt-3 text-white">May 17th, 2026</h1>
      <h1 className="m-0 text-white">Calgary, AB</h1>
    </div>
  );
}
