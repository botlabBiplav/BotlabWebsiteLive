// app/page.js
"use client";

import App from "./App"; // Adjust the import according to your structure
import endpointData from "./api/endpointData";
import Herocard from "./src/components/Home/Herocard";
import Background from "./src/components/Background/Background";
import StoryPage from "./src/components/Home/StoryPage";
import { revalidatePath } from "next/cache";
const API_URL = "http://34.221.252.34:1337";
const token = "2bba812c873270c8e24471b7d53830b00f4f398e8dc87a8c004aee7fd26a70befe49164757c72f72e57fcac63430d391d83323c85b79d79871a71e94e71996e7e6a61112998ec7a3eff68794b58bc894f43c0d91f6f1cec7b7bee5ef6ab244d67cedaae82305248db3edbed8b99ea309596dec7265d71afd5502cc237b3d64e0"
// Fetch data from your API with ISR
// Fetch data from your API with ISR
// here we are implemented the isr on-demand revalidation using webhook
const fetchData = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
     next: { tags: ['posts'] }, 
     cache: 'no-store',
    // next: {
    //   revalidate: 60, // Revalidate every 60 seconds
    // },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const data = await res.json();
  return data.data;
};

const fetchAppData = async () => {
  const [hero, story] = await Promise.all([
    fetchData(endpointData.heroSection),
    fetchData(endpointData.storyPage),
  ]);

  return { hero, story };
};

export default async function Home() {
  const { hero, story } = await fetchAppData();

  console.log(story,'herosectiondata')

  return (
    <main>
      <div className="z-10">
        <Background />
        <Herocard getData={hero} />
        <StoryPage getData={story} />
      </div>
    </main>
  );
}
