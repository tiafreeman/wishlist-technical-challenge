import WishList from "../components/WishList.tsx";
import ContentCard from "../components/ContentCard.tsx";
import data from "../../data.ts";

function WishListPage() {
  const hiddenBooks = data.filter((book) => book.isHidden);
  const wishListBooks = data.filter((book) => !book.isHidden);
  return (
    <>
      <WishList hiddenBooks={hiddenBooks} wishListBooks={wishListBooks} />
      <ContentCard />
    </>
  );
}

export default WishListPage;
