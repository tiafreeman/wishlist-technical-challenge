import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants.ts";

type ListItemProps = {
  title: string;
  author: string;
};

function ListItem({ title, author }: ListItemProps) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
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
          background: "linear-gradient(85deg, #EB5A52 0%, #F7CD98 100%)",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.10)",
          borderRadius: 5,
        }}
      >
        <h4>{title}</h4>
        <h5>{author}</h5>
      </section>
    </>
  );
}

export default ListItem;
