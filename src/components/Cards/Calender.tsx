"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveCalendar } from "@nivo/calendar";

const MyResponsiveCalendar = ({ data }) => (
  <ResponsiveCalendar
    data={data}
    from="2024-01-01"
    to="2024-12-31"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor="#ffffff"
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
  />
);

export default function Calendar() {
  function generateDateForYear2024() {
    const data = [];
    const startDate = new Date("2024-01-01");
    const endDate = new Date("2024-12-31");

    while (startDate <= endDate) {
      const value = Math.floor(Math.random() * 301);
      const formattedDate = startDate.toISOString().split("T")[0];

      data.push({
        day: formattedDate,
        value: value,
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    return data;
  }

  const dataArray = generateDateForYear2024();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
      </CardHeader>
      <CardContent className="h-[200px] flex items-center w-full">
        <MyResponsiveCalendar data={dataArray} />
      </CardContent>
    </Card>
  );
}
