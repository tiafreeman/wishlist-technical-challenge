import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants.ts";

type ListItemProps = {
  id: string;
  title: string;
  author: string;
};

function ListItem({ id, title, author }: ListItemProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, title, author },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <>
      <section
        ref={dragRef}
        style={{
          opacity: isDragging ? 0.5 : 1,
          width: "100%",
          height: "100%",
          background: "#242038",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 5,
          marginBottom: 10,
          padding: 2,
        }}
      >
        <h4 style={{ marginTop: 0, marginBottom: 10 }}>{title}</h4>
        <p style={{ marginTop: 0 }}>{author}</p>
      </section>
    </>
  );
}

export default ListItem;
