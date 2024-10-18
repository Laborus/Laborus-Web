import StudentMetrics from "../../../components/Sidebar/metrics";
import PostList from "./post";
import "./style.css";

export default function HomePage() {
  return (
    <>
      <div className="content">
        <PostList />
      </div>
      <StudentMetrics />
    </>
  );
}
