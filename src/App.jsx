import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";
import Loader from "./components/Loader/Loader";
import { selectError, selectIsLoading } from "./redux/selectors";

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <TaskList />
    </Layout>
  );
};
