// app/page.js
"use client";

import App from "./App"; // Adjust the import according to your structure
import endpointData from "./api/endpointData";
import Herocard from "./src/components/Home/Herocard";
import Background from "./src/components/Background/Background";
import StoryPage from "./src/components/Home/StoryPage";
import { revalidatePath } from "next/cache";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
// Fetch data from your API with ISR
// here we are implemented the isr on-demand revalidation using webhook
// const fetchData = (endpoint) => {
//   return fetch(`${API_URL}${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     next: { tags: ['posts'] }, // Use tags for webhook integration
//     cache: 'no-store',
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Failed to fetch ${endpoint}`);
//     }
//     return res.json();
//   })
//   .then((data) => data.data);
// };


// const fetchAppData = () => {
//   return Promise.all([
//     fetchData(endpointData.heroSection),
//     fetchData(endpointData.storyPage),
//   ])
//   .then(([hero, story]) => {
//     return { hero, story };
//   });
// };

export default function Home() {
  // return fetchAppData().then(({ hero, story }) => {
  //   console.log(story, 'herosectiondata');

    return (
      <main>
        <div className="z-10">
          <h1 className="text-white text-2xl mt-20">This is working fine</h1>
          {/* <Background />
          <Herocard getData={hero} />
          <StoryPage getData={story} /> */}
        </div>
      </main>
    );
  // });
}

