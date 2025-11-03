"use client";

import CategoryItems from "./CategoryItems";
import CategorySubItems from "./CategorySubItems";

type CategoryMenuItemsProps = {
  categories: string[];
  categoryItems: {
    categoryTitle: string;
    items: string[];
  }[];
};

export default function CategoryMenuItems(props: CategoryMenuItemsProps) {
  const { categories, categoryItems } = props;
  return (
    <div className="grid grid-cols-[25%_auto] w-6xl">
      <CategoryItems categories={categories} />
      <CategorySubItems categoryItems={categoryItems} />
    </div>
  );
}
