import React from 'react';
import { 
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
  const headerItems = [
    { name: "HOME", Icon: HomeIcon },
    { name: "TRENDING", Icon: LightningBoltIcon },
    { name: "VERIFIED", Icon: BadgeCheckIcon },
    { name: "COLLECTIONS", Icon: CollectionIcon },
    { name: "SEARCH", Icon: SearchIcon },
    { name: "ACCOUNT", Icon: UserIcon },
  ]
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        {headerItems.map(item => (
          <HeaderItem key={item.name} title={item.name} Icon={item.Icon} />
        ))}
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100} 
      />
    </header>
  )
}

export default Header;
