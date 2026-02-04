import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          icon={<Newspaper className="text-slate-500" size={72} />}
          count={100}
        />

        <DashboardCard
          title="Categories"
          icon={<Folder className="text-slate-500" size={72} />}
          count={12}
        />

        <DashboardCard
          title="Users"
          icon={<User className="text-slate-500" size={72} />}
          count={750}
        />

        <DashboardCard
          title="Comments"
          icon={<MessageCircle className="text-slate-500" size={72} />}
          count={1200}
        />
      </div>

      <AnalyticsChart />

      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
