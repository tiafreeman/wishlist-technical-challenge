import { useState } from "react";
import Book from "../types/book.ts";
import ListItem from "./ListItem.tsx";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants.ts";

type WishListProps = {
  hiddenBooks: Book[];
  wishListBooks: Book[];
};

function WishList({ hiddenBooks, wishListBooks }: WishListProps) {
  const [hiddenList, setHiddenList] = useState<Book[]>(hiddenBooks);
  const [wishList, setWishList] = useState<Book[]>(wishListBooks);
  const [{ hiddenListHover }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Book) =>
      setHiddenList((hiddenList) => {
        setWishList((wishList) =>
          wishList.filter((book) => book.id !== item.id),
        );
        return hiddenList.some((book) => book.id === item.id)
          ? hiddenList
          : [...hiddenList, item];
      }),
    collect: (monitor) => ({
      hiddenListHover: monitor.isOver(),
    }),
  });

  const [{ wishListHover }, dropZone2] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: Book) =>
      setWishList((wishList) => {
        setHiddenList((hiddenList) =>
          hiddenList.filter((book) => book.id !== item.id),
        );
        return wishList.some((book) => book.id === item.id)
          ? wishList
          : [...wishList, item];
      }),
    collect: (monitor) => ({
      wishListHover: monitor.isOver(),
    }),
  });

  return (
    <div
      style={{
        width: "30%",
        background: "#725AC1",
        borderRadius: 5,
        padding: "1rem",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
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
              color: "#725AC1",
              borderRadius: 2,
              padding: "0.1rem",
            }}
          >
            Books
          </p>
        </div>
      </header>
      <div ref={dropZone2} style={{ minHeight: 50, width: "100%" }}>
        {wishList.map((bookInfo) => (
          <ListItem
            key={bookInfo.id}
            id={bookInfo.id}
            title={bookInfo.title}
            author={bookInfo.author}
          />
        ))}
        {wishListHover && (
          <section
            style={{
              opacity: 0.3,
              width: "100%",
              height: 40,
              background: "#AFA2FF",
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.10)",
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
        )}
      </div>
      <div ref={dropRef} style={{ minHeight: 100, width: "100%" }}>
        <div style={{ marginBottom: 10 }}>------Hidden items------</div>
        {hiddenList.map((bookInfo) => (
          <ListItem
            key={bookInfo.id}
            id={bookInfo.id}
            title={bookInfo.title}
            author={bookInfo.author}
          />
        ))}
        {hiddenListHover && (
          <section
            style={{
              opacity: 0.3,
              width: "100%",
              height: 40,
              background: "#AFA2FF",
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.10)",
              borderRadius: 5,
              marginBottom: 10,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default WishList;
