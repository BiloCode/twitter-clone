import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import ContentDropDown from 'shared/components/common/ContentDropdown';
import ItemDropMenu from 'shared/components/common/ItemDropMenu';

const ListMenuDropdown = () => (
  <ContentDropDown right={6}>
    <ItemDropMenu icon={<AiOutlineHome />} text="Dejar de segui a google por alguna extraña razon" />
    <ItemDropMenu icon={<AiOutlineHome />} text="Denunciar Tweet" />
    <ItemDropMenu icon={<AiOutlineHome />} text="Silenciar a google" />
    <ItemDropMenu icon={<AiOutlineHome />} text="Bloquear a google" />
  </ContentDropDown>
);

export default ListMenuDropdown;