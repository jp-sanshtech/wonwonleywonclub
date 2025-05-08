import Link from "next/link";

type NavLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "nav-link" }: NavLinkProps) {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  
  return (
    <div className={className}>
      {children}
    </div>
  );
}
