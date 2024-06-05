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
        <button onClick={() => setIsActive(true)}>
          {content}
          {' v'}
        </button>
      </div>
    );
  }

  if (isActive) {
    return (
      <div>
        <button onClick={() => setIsActive(false)}>
          {content}
          {' ^'}
        </button>
        <ul className="absolute">
          {listContent.map((element: string) => {
            return (
              <li
                className="flex cursor-pointer border-t-2 bg-slate-300 px-10"
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
