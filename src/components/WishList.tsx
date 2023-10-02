import { useState } from "react";
import Book from "../types/book.ts";
import ListItem from "./ListItem.tsx";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants.ts";

type WishListProps = {
  books: Book[];
};

function WishList({ books }: WishListProps) {
  const [hiddenList, setHiddenList] = useState<Book[]>([]);
  const [wishList, setWishList] = useState<Book[]>(books);
  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Book) =>
      setHiddenList((hiddenList) => {
        setWishList((wishList) =>
          wishList.filter((book) => book.id !== item.id),
        );
        return !hiddenList.includes(item) ? [...hiddenList, item] : hiddenList;
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
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
      {wishList.map((bookInfo) => (
        <ListItem
          id={bookInfo.id}
          title={bookInfo.title}
          author={bookInfo.author}
        />
      ))}
      <div ref={dropRef} style={{ width: "100%" }}>
        <div>------Hidden items------</div>
        {hiddenList.map((bookInfo) => (
          <ListItem
            id={bookInfo.id}
            title={bookInfo.title}
            author={bookInfo.author}
          />
        ))}
        {isOver && <div style={{ minHeight: 400 }}>Drop Here!</div>}
      </div>
    </div>
  );
}

export default WishList;
