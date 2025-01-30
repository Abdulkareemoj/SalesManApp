import { AreaGraph } from "@/components/charts/area-graph";
import { BarGraph } from "@/components/charts/bar-graph";
import { PieGraph } from "@/components/charts/pie-graph";
const Analytics = () => {
  return (
    <>
      <div className="col-span-full pb-4">
        <BarGraph />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <AreaGraph />
        </div>
        <div className="col-span-4 md:col-span-3">
          <PieGraph />
        </div>
      </div>
    </>
  );
};

export default Analytics;
