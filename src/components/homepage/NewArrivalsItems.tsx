import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const NewArrivalsItems = () => {
  return (
    <div className="flex items-center justify-center">
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="men">Mens</TabsTrigger>
          <TabsTrigger value="women">Womens</TabsTrigger>
        </TabsList>
        <TabsContent value="men">Men Collection Is here.</TabsContent>
        <TabsContent value="women">Women Collection Is here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default NewArrivalsItems;
