import { menuItems } from "@/constants/menu";
import Link from "next/link";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

function MobileMenu({ toggleMenu, isOpen }: Props) {
  return (
    isOpen && (
      <div className="xl:hidden absolute top-20 left-0 right-0 w-full z-30 bg-white border-gray-700 ">
        <nav className="flex flex-col space-y-2 p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="hover:text-accent-light transition w-full py-5 text-center uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    )
  );
}

export default MobileMenu;
