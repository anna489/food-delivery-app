import * as React from "react";
import Card from "@/components/Card";
import RightDrawer from "@/components/RightDrawer";
import CardModals from "@/components/CardModals";

export default function Home() {
  return (
    <main style={{ margin: "50px" }}>
      <Card />
      <CardModals />
      <RightDrawer />
      {/* <div className="wrapper">
        <div>
          <h1>hi</h1>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div> */}
    </main>
  );
}
