import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BackButtonProps = {
  href?: string;
  className?: string;
};

export default function BackButton({ href = "/", className = "nav-link" }: BackButtonProps) {
  return (
    <Link href={href} className={className}>
      <ArrowLeft size={20} strokeWidth={3} />
      <span className="ml-2">back</span>
    </Link>
  );
}
