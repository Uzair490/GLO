import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Customerbar from '../components/Customerbar';
import search from '../assets/search.svg';
import Export from '../assets/Export.svg';
import DateIcon from '../assets/Date.svg';
import All from '../assets/All.svg';

const AccountUsers = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const users = [
    { id: 1, username: 'John Doe', email: 'john@example.com', joinDate: '12-Sep-2024', status: 'Active' },
    { id: 2, username: 'Jane Doe', email: 'jane@example.com', joinDate: '10-Aug-2024', status: 'Active' },
    { id: 3, username: 'Sam Smith', email: 'sam@example.com', joinDate: '05-Jul-2024', status: 'Active' }
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedIds(!selectAll ? users.map((user) => user.id) : []);
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    if (selectedIds.length === users.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedIds]);

  return (
    <Layout>
      <Customerbar />
      <main>
        <section className="shadow-sm mt-4 border border-gray-200 rounded-lg p-4 bg-white">
          <div className="mb-2">
            <p className="text-lg font-medium text-gray-700">Account Users</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xl font-semibold ">120</p>
            <p className="text-xs">
              <span className="text-[#1A9882] font-medium">+20</span> Joined recently
            </p>
          </div>
        </section>
      </main>
      <div>
        <div className="flex gap-8 mt-2 bg-white shadow-md rounded p-4">
          <input
            type="text"
            className="border p-[6px] w-[90%] pl-3 bg-[#F0F1F3] rounded placeholder:text-[13px]"
            placeholder="Search Users"
          />
          <img src={search} alt="search icon" className="ml-[-60px] w-[18px]" />
          <div className="flex gap-2">
            <p className="button-style">
              <img src={Export} alt="export" className="w-3 h-3" />
              <span className="text-[12px] text-black">Export</span>
            </p>
            <p className="button-style">
              <img src={DateIcon} alt="date" className="w-3 h-3" />
              <span className="text-[12px] text-black">Date</span>
            </p>
            <p className="button-style">
              <img src={All} alt="all" className="w-3 h-3" />
              <span className="text-[12px] text-black">All</span>
            </p>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <main className="mt-4">
        <div className="flex border-b border-gray-300 py-2 bg-gray-100">
          <div className="flex items-center gap-2 pl-3 w-[12%]">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="reusable-checkbox"
            />
            <p className="font-semibold">ID</p>
          </div>
          <div className="w-[12%] ">
            <p className="font-semibold">Username</p>
          </div>
          <div className="w-[40%] ml-[-50px] text-center ">
            <p className="font-semibold">Email</p>
          </div>
          <div className="w-[18%] text-center">
            <p className="font-semibold">Join Date</p>
          </div>
          <div className="w-[19%]  text-end">
            <p className="font-semibold">Status</p>
          </div>
        </div>
      </main>

      {/* Table Body */}
      <main>
        {users.map((user) => (
          <div key={user.id} className="flex border-b border-gray-200 py-2">
            <div className="flex gap-3 pl-3 w-[12%]">
              <input
                type="checkbox"
                checked={selectedIds.includes(user.id)}
                onChange={() => handleSelect(user.id)}
                className="reusable-checkbox"
              />
              <p>{user.id}</p>
            </div>
            <div className="w-[12%] ">
              <p>{user.username}</p>
            </div>
            <div className="w-[40%] text-center">
              <p className=''>{user.email}</p>
            </div>
            <div className="w-[18%] ml-[-42px] text-center">
              <p>{user.joinDate}</p>
            </div>
            <div className="w-[18%]   text-end">
              <p>{user.status}</p>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default AccountUsers;
