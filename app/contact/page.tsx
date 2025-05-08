import Link from "next/link";
import BackButton from "../components/BackButton";

export default function ContactPage() {
  return (
    <div className="nav-container">
      <BackButton href="/" />

      <div className="text-container flex flex-col gap-4">
        <p>
        to become a member, work with us or for any other questions, email us at <Link href="mailto:support@wonwonleywonclub.com" className="underline">support@wonwonleywonclub.com</Link>
        </p>
      </div>
    </div>
  );
}
