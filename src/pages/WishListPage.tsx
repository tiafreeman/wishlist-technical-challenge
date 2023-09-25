import WishList from "../components/WishList.tsx";
import ContentCard from "../components/ContentCard.tsx";
import data from "../../data.ts";

function WishListPage() {
  return (
    <>
      <WishList books={data} />
      <ContentCard />
    </>
  );
}

export default WishListPage;
