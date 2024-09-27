"use client"
import React from "react";
import axios from "axios";
import endpointData from "../app/api/endpointData";
import Herocard from "../app/src/components/Home/Herocard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

export async function getStaticProps() {
  // Fetch data for the page (or component)
  const res = await axios.get(`${API_URL}${endpointData.heroSection}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const posts = await res.data.data
  console.log(posts,'resdatafound')


  return {
    props: {
      posts, // Pass the fetched data as props to the page
    },
    revalidate: 5, // Enable ISR, regenerate the page every 20 seconds
  };
}

export default function Home({posts}) {
  console.log(posts,'postdatarrt')
  return (
    <div>
      <Herocard getData = {posts} />
    </div>
  );
};

