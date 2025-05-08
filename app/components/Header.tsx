import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/" className="header">
      <Image
        src="/images/WONWONLEYWON LOGO club PNG.png"
        alt="WONWONLEYWON LOGO"
        width={140}
        height={55}
        style={{
          marginLeft: "9px",
        }}
        priority
        // className="logo-image"
        loading="eager"
        fetchPriority="high"
      />
    </Link>
  );
}
