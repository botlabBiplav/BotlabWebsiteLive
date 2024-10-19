import Herocard from "./src/components/Home/Herocard";
import StoryPage from "./src/components/Home/StoryPage";
import DroneType from "./src/components/Home/DroneType";
import endpointData from "./api/endpointData";


// API URL and token
const API_URL = "http://44.243.170.250:1337";
const token = "2bba812c873270c8e24471b7d53830b00f4f398e8dc87a8c004aee7fd26a70befe49164757c72f72e57fcac63430d391d83323c85b79d79871a71e94e71996e7e6a61112998ec7a3eff68794b58bc894f43c0d91f6f1cec7b7bee5ef6ab244d67cedaae82305248db3edbed8b99ea309596dec7265d71afd5502cc237b3d64e0";

// Fetch data function for server-side
const fetchDataServerSide = async (endpoint) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Check the status code and log detailed response if not OK
    if (!res.ok) {
      const errorText = await res.text(); // Get the error message from the response body
      console.error(`Error fetching ${endpoint}:`, res.status, errorText); // Log status and error text
      throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${errorText}`);
    }

    const data = await res.json();
    console.log(data,'this is datarrt')
    return data.data;

  } catch (error) {
    console.error('Network or server error:', error.message);
  }
};


export default async function Home() {
  // Fetch data on the server side
  const [hero, story] = await Promise.all([
    fetchDataServerSide(endpointData.heroSection),
    fetchDataServerSide(endpointData.storyPage),
  ]);

  // Render the component with fetched data
  return (
    <main>
      <div className="z-10">
        <Herocard getData={hero} />
        <StoryPage getData={story} />
        <DroneType />
      </div>
    </main>
  );
}
