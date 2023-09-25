type ListItemProps = {
  title: string;
  author: string;
};

function ListItem({ title, author }: ListItemProps) {
  return (
    <>
      <section
        style={{
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
