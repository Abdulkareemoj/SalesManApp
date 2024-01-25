"use client";

import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { ProfileMenu } from "@/components/profile-menu";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

import Analytics from "@/components/dashboard/analytics";
import Overview from "@/components/dashboard/overview";
import Report from "@/components/dashboard/report";
import Notifications from "@/components/dashboard/notifications";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome.",
};

export default function DashboardPage() {
  return (
    // <SessionAuth>
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <div className="ml-auto flex items-center space-x-4">
            <Search placeholder="Search..." />
            <ProfileMenu />
          </div>
        </div>
      </div>
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
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <Overview />
          </TabsContent>
          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>
          <TabsContent value="reports">
            <Report />
          </TabsContent>
          <TabsContent value="notifications">
            <Notifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    // </SessionAuth>
  );
}
