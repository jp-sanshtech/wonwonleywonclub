import Link from "next/link";
import BackButton from "../components/BackButton";

export default function AboutPage() {
  return (
    <div className="nav-container">
      <BackButton href="/" />

      <div className="text-container flex flex-col gap-4">
        <p>
          we are a private members club that hosts exclusive parties, worldwide, for our members and their guests. we hope these parties will provide
          the attendees entertainment or joy, to support them to become the best version of themselves.
        </p>

        <p>
          we are a company of the{" "}
          <Link href="https://www.wonwonleywon.com" className="underline">
            wonwonleywon
          </Link>{" "}
          fashion brand.
        </p>
      </div>
    </div>
  );
}
