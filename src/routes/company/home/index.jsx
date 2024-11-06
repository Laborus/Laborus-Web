import StudentMetrics from "../../../components/Sidebar/metrics";
import PostList from "./post";
import "./style.css";

export default function HomePageCompany() {
  return (
    <section className="wrapperHome">
      <div className="content">
        <PostList />
      </div>
      <StudentMetrics />
    </section>
  );
}
