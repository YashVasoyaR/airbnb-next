"use client";

import React, { useCallback } from "react";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiHouse,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
  GiWindmill,
  GiUfo
} from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaSkiing, FaHotel } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { AiOutlineFundView } from "react-icons/ai";
import { MdOutlineVilla, MdOutlineSurfing } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Farms",
    icon: GiHouse,
    description: "This property is in the farms!",
  },
  {
    label: "Amazing Pools",
    icon: TbPool,
    description: "This property has a pool!",
  },
  {
    label: "Amazing Views",
    icon: AiOutlineFundView,
    description: "This property has a amazing views!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Surfing",
    icon: MdOutlineSurfing,
    description: "This property has Surfing activities!",
  },
  {
    label: "Rooms",
    icon: FaHotel,
    description: "This property has rooms!",
  },
  {
    label: "OMG!",
    icon: GiUfo,
    description: "This property has OMG environment!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property has camping activities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is luxurious!",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  console.log("pathname :>> ", pathname);
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
