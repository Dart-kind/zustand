import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {TodoViewer} from "./components/TodoViewer.tsx";
import {NewTodo} from "./components/NewTodo.tsx";

const queryClient = new QueryClient()

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <NewTodo />
          <TodoViewer />
      </QueryClientProvider>
  );
}
