"use client";

import { useState } from "react";
import { FavoriteList } from "../components/Favorites/FavoriteList/FavoriteList";
import { ProductItemType } from "../types/product";
import { mockFavoriteItems } from "../mocks/favoriteItem";

export default function Favorite() {
//   const [favoriteItems, setFavoriteItems] = useState<ProductItemType[]>(mockFavoriteItems);
  
  return (
    <>
      <main>
        <div className="container p-5">
          <FavoriteList />
        </div>
      </main>
    </>
  );
}
