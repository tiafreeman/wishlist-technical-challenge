import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WishListPage from "./pages/WishListPage.tsx";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <WishListPage />
      </DndProvider>
    </>
  );
}

export default App;
