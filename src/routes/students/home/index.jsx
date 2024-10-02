import PostList from "../../../components/Lists/post";
import StudentMetrics from "../../../components/Sidebar/metrics";
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
