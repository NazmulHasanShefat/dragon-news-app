"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategorysLinks({ categoryLink }) {
  const currentPath = usePathname();
  const { category_name, category_id } = categoryLink;
  return (
    <Link href={`/category/${category_id}`} className={`hover:bg-gray-400 py-2 px-4 hover:text-white ${currentPath === `/category/${category_id}` ? "bg-gray-500 text-white hover:bg-gray-500" : ""}`}>
      {category_name}
    </Link>
  );
}
