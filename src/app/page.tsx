import Calender from "@/components/Cards/Calender";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />
        <div className="grid gap-[32px]">
          <Calender />
          <Calender />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px] h-[300px] overflow-hidden">
        <Lines />
        <Card className=" overflow-y-scroll">
        <CardHeader>
        <CardTitle>Order</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
        </CardHeader>
        <div>
            <TableDemo />
        </div>    
        </Card>
     <Card className="overflow-y-scroll">
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
      </CardHeader>
      <div>
        <DataTableDemo />
      </div>
    </Card>
        <Card className="h-[300px]">hello world</Card>
      </div>
    </div>
  );
}
