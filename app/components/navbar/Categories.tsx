'use client';

import Container from "../Container";

import { MdOutdoorGrill, MdFamilyRestroom, MdDeck, MdSportsBar, MdRestaurant } from 'react-icons/md';
import { FaWineGlass, FaHeart } from 'react-icons/fa';
import { GiSprout, GiCook } from 'react-icons/gi';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Outdoor",
    icon: MdOutdoorGrill,
    description: "Restaurant offers outdoor dining space"
  },
  {
    label: "Wine",
    icon: FaWineGlass,
    description: "Extensive wine selection available"
  },
  {
    label: "Vegan",
    icon: GiSprout,
    description: "Offers vegan menu items"
  },
  {
    label: "Family",
    icon: MdFamilyRestroom,
    description: "Welcomes families with children"
  },
  {
    label: "Rooftop",
    icon: MdDeck,
    description: "Rooftop dining space available"
  },
  {
    label: "Chef",
    icon: GiCook,
    description: "Exclusive chef's table experience"
  },
  {
    label: "Romantic",
    icon: FaHeart,
    description: "Perfect for date night"
  },
  {
    label: "Bar",
    icon: MdSportsBar,
    description: "Multiple TVs for sports viewing"
  },
  {
    label: "Buffet",
    icon: MdRestaurant,
    description: "All-you-can-eat buffet options"
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (  
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
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
}

export default Categories;