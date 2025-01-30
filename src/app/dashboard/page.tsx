import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

import Analytics from "@/components/dashboard/analytics";
import Overview from "@/components/dashboard/overview";
import Tasks from "@/components/dashboard/tasks/tasks";
import Notifications from "@/components/dashboard/notifications";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome.",
};

export default function DashboardPage() {
  return (
    <div className="hidden flex-col md:flex">
      {/* <TeamSwitcher /> */}
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Overview />
          </TabsContent>
          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>
          <TabsContent value="tasks">
            <Tasks />
          </TabsContent>
          <TabsContent value="notifications">
            <Notifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
