import React from 'react'
// import { MenuButton } from '../ButtonMenu'
import { ExclusiveGames } from '@/page/ExclusiveGames';
import { MenuButton } from '@/page/ButtonMenu';

export const MainPage = () => {
  return (
    <div className="container">
      <MenuButton />
      {/* TODO: fix name convention */}
      <ExclusiveGames/>
    </div>
  );
}
