'use client';
import AnimalRegister from '@/components/AnimalRegister';
import DropdownList from '@/components/UI/DropdownList';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [listContent, setListContent] = useState(['tre', 'fdsfds', 'ffdsfds']);

  useEffect(() => {}, []);

  return (
    <div>
      <AnimalRegister />
      <DropdownList content={'test'} listContent={listContent} />
    </div>
  );
};

export default page;
