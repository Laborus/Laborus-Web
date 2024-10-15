import { FaEllipsisH, FaImage, FaVideo, FaPaperPlane } from "react-icons/fa";
import "./style.css";
import ChatSidebar from "./components/chatSidebar";
import ChatContent from "./components/chatContent";

export default function ChatPages() {
  return (
    <div className="chat-container">
      <ChatSidebar />
      <ChatContent />
    </div>
  );
}
