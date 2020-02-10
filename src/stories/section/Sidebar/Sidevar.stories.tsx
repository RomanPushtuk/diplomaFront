import React from "react";
import { Sidebar } from "../../../modules/section";

export default {
  title: "Modules/Section/Sidebar",
  component: Sidebar
};

export const SectionSidebar = () => (
  <div>
    <p>Section Sidebar</p>
    <div style={{ width: 400 }}>
      <Sidebar title="Доступные темы">Контент</Sidebar>
    </div>
  </div>
);
