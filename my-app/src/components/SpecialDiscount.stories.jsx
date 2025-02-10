  import React from "react";
  import SpecialDiscount from "./SpecialDiscount.jsx";
  
  export default {
    title: "Component/SpecialDiscount",
    component: SpecialDisount,
  };
  
  const Template = (args) => <SpecialDiscount {...args} />;
  
  export const Default = Template.bind({});
  Default.arg = {};