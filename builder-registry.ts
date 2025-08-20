"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import PricingSection from "./components/Pricing Section/PricingSection";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(PricingSection, {
  name: "Counter",
  inputs: [
    {
      name: "subheading",
      type: "string",
    },
    {
      name: "heading",
      type: "string",
    },
  ],
});
