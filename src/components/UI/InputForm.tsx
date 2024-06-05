import React from 'react';

export type InputFormType = {
  title: string;
  name: string;
  setter: any;
};

export const InputForm = ({ title, name, setter }: InputFormType) => {
  return (
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        {title} :
      </label>
      <input
        className=" border rounded w-full py-2 px-3 text-grey-darker"
        type="text"
        name={name}
        id={name}
        placeholder={title}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
    </div>
  );
};
