'use client';

import Container from "../Container";

import { MdOutdoorGrill, MdFamilyRestroom, MdDeck, MdLocalBar, MdPets, MdSportsBar, MdRestaurant } from 'react-icons/md';
import { FaGuitar, FaWineGlass, FaMoon, FaHeart } from 'react-icons/fa';
import { GiSprout, GiCook } from 'react-icons/gi';
import { BsBriefcase } from 'react-icons/bs';
import { BiDrink } from 'react-icons/bi';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Outdoor Seating",
    icon: MdOutdoorGrill,
    description: "Restaurant offers outdoor dining space"
  },
  {
    label: "Live Music",
    icon: FaGuitar,
    description: "Features live music performances"
  },
  {
    label: "Fine Wine",
    icon: FaWineGlass,
    description: "Extensive wine selection available"
  },
  {
    label: "Vegan Friendly",
    icon: GiSprout,
    description: "Offers vegan menu items"
  },
  {
    label: "Family Friendly",
    icon: MdFamilyRestroom,
    description: "Welcomes families with children"
  },
  {
    label: "Late Night",
    icon: FaMoon,
    description: "Open late for dining"
  },
  {
    label: "Rooftop",
    icon: MdDeck,
    description: "Rooftop dining space available"
  },
  {
    label: "Chef's Special",
    icon: GiCook,
    description: "Exclusive chef's table experience"
  },
  {
    label: "Full Bar",
    icon: MdLocalBar,
    description: "Dedicated bar space with cocktails"
  },
  {
    label: "Business Ready",
    icon: BsBriefcase,
    description: "Suitable for business meetings"
  },
  {
    label: "Pet Friendly",
    icon: MdPets,
    description: "Welcomes pets in outdoor areas"
  },
  {
    label: "Romantic",
    icon: FaHeart,
    description: "Perfect for date night"
  },
  {
    label: "Happy Hour",
    icon: BiDrink,
    description: "Features happy hour specials"
  },
  {
    label: "Sports Bar",
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