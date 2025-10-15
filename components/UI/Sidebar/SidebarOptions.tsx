import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
  className?: string; //optional
}
export default function SidebarOptions({ links }: { links: LinkItem[] }) {
  return (
    <ul>
      {links.map((link) => {
        return (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
