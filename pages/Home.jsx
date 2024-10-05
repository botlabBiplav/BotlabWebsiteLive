"use client"; // Ensure this is correct, typically it's not needed in this context
import React from "react";
import axios from "axios";
import endpointData from "../app/api/endpointData";
import Herocard from "../app/src/components/Home/Herocard";
import StoryPage from "../app/src/components/Home/StoryPage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

// export async function getStaticProps() {
//   try {
//     // Fetch data for the page (or component)
//     const res = await axios.get(`${API_URL}${endpointData.heroSection}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     const posts = res.data.data || []; // Ensure posts is an array
//     console.log(posts, 'resdatafound');

//     return {
//       props: {
//         posts, // Pass the fetched data as props to the page
//       },
//       revalidate: 5, // Enable ISR, regenerate the page every 5 seconds
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         posts: [], // Return an empty array or handle the error accordingly
//       },
//       revalidate: 20, // Still revalidate even on error
//     };
//   }
// }

export default function Home() {

  
  return (
    <div>

      
      <div className="bg-red-300 py-40">
      {/* {posts?.length > 0 ? (
          posts.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg">{item.id}</h1>
            </div>
          ))
        ) : (
          <h1>No posts found</h1>
        )} */}
      <div>djdnj</div>
      </div>
      {/* <Herocard getData={posts} /> */}
      {/* <StoryPage /> */}
    </div>
  );
}
