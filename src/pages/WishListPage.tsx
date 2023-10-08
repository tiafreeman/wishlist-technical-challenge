import WishList from "../components/WishList.tsx";
import data from "../../data.ts";

function WishListPage() {
  const hiddenBooks = data.filter((book) => book.isHidden);
  const wishListBooks = data.filter((book) => !book.isHidden);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <WishList hiddenBooks={hiddenBooks} wishListBooks={wishListBooks} />
    </div>
  );
}

export default WishListPage;
