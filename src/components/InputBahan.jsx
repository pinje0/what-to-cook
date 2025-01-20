/* eslint-disable react/prop-types */
import { useState } from 'react';

const InputBahan = ({ onSearch }) => {
  const [bahan, setBahan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(bahan);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={bahan}
        onChange={(e) => setBahan(e.target.value)}
        placeholder="Masukkan bahan (pisahkan dengan koma)"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Cari
      </button>
    </form>
  );
};

export default InputBahan;
