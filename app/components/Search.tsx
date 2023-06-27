"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
    setSearch("");
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
      >
        🚀
      </button>
    </form>
  );
}

export default Search;