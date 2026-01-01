'use client'
import Hero from "./components/Hero/Hero";
import GroupedSearchResultCard from "./components/SearchResultCard/GroupedSearchResultCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL, withCredentials } from "./constants/util";
import { noFoundContent, searchContent } from "./components/SearchResultCard/constant";

export default function Home() {
  const [contents, setContents] = useState([searchContent]);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = (value: string) => { setSearch(value) };

  const searchContents = async () => {

    setSearching(true)
    try {
      const res = await axios.get(`${URL}/content?search=${search}`, withCredentials);
      const c = res.data?.data?.contents;

      setContents(c.length ? c : [noFoundContent])

    } catch (error) {

    } finally {
      setSearching(false)
    }
  }

  useEffect(() => {
    if (!search) {
      setContents([searchContent])
    } else {
      searchContents()
    }
  }, [search])

  return (
    <div>
      <Hero searching={searching} search={search} handleSearch={handleSearch} />
      <GroupedSearchResultCard list={contents} width="50%" search={search} />
    </div>
  );
}
