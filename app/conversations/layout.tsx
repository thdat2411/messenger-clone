import { ReactNode } from "react";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversation = await getConversations();
  const users = await getUsers();
  return (
    <SideBar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversation} />
        {children}
      </div>
    </SideBar>
  );
}
