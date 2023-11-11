import VirtualList from "react-tiny-virtual-list";
import create from "zustand";

import logo from "./logo.svg";
import "./App.css";

const useStore = create((set) => ({
  bears: 10,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

function App() {
  const { bears } = useStore((state) => ({
    bears: state.bears,
  }));

  return (
    <VirtualList
      width={300}
      height={300}
      itemCount={bears ? 30 : 8}
      itemSize={30}
      style={{ border: "1px solid" }}
      renderItem={({ index, style }) => (
        <div key={index} style={style}>
          Row: #{index}
        </div>
      )}
    />
  );
}

export default App;
