'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DropdownList = ({
  content,
  listContent,
}: {
  content: string;
  listContent: any;
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  if (!isActive) {
    return (
      <div>
        <button
          className=" border rounded w-full py-2 px-3 text-grey-darker"
          onClick={() => setIsActive(true)}
        >
          {content}
          {' v'}
        </button>
      </div>
    );
  }

  if (isActive) {
    return (
      <div>
        <button
          className=" border rounded w-full py-2 px-3 text-grey-darker"
          onClick={() => setIsActive(false)}
        >
          {content}
          {' ^'}
        </button>
        <ul className="absolute">
          {listContent.map((element: string) => {
            return (
              <li
                className=" border w-full py-2 px-3 text-grey-darker"
                key={element}
                onClick={() => {
                  router.push('/#');
                }}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default DropdownList;
