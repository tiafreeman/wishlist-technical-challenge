import Book from "../types/book.ts";
import ListItem from "./ListItem.tsx";

type WishListProps = {
  books: Book[];
};

function WishList({ books }: WishListProps) {
  return (
    <div
      style={{
        width: "30%",
        background: "#EB5A52",
        borderRadius: 5,
        padding: "1rem",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Shopping</p>
          <h2>Wish List</h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              background: "#F4F4F4",
              color: "#EF8774",
              borderRadius: 2,
              padding: "0.1rem",
            }}
          >
            Books
          </p>
        </div>
      </header>
      {books.map((bookInfo) => (
        <ListItem title={bookInfo.title} author={bookInfo.author} />
      ))}
    </div>
  );
}

export default WishList;
