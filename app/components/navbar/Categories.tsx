"use client";

import React, { useCallback } from "react";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbBeach } from "react-icons/tb";
import { GiHouse } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

export const categories = [
  {
    label: "Farms",
    icon: GiHouse,
    description: "This property is close to the farms!",
  },
  {
    label: "Amazing pools",
    icon: LiaSwimmingPoolSolid,
    description: "This property is close to pools!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
];
const Categories = () => {
    
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
