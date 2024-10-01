import PostList from "../../../components/Lists/post";
import StudentMetrics from "../../../components/Sidebar/metrics";
import NavBar from "../../../components/Sidebar/navbar";
import "./style.css";

export default function HomePage() {
  return (
    <>
      <PostList />
      <StudentMetrics />
    </>
  );
}
