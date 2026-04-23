import Link from "next/link";

export default function CategorysLinks({ categoryLink }) {
  const { category_name, category_id } = categoryLink;
  return (
    <Link href={"/"} className="hover:bg-blue-500 py-2 px-4 hover:text-white">
      {category_name}
    </Link>
  );
}
