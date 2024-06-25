//This is the Auth token, you will use it to generate a meeting and connect to it
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiY2VkNTM2OS05YjY5LTQ3NDUtOTBhYS1hNWVhNjE3NDFlNTkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxOTMzMTgyMiwiZXhwIjoxNzIxOTIzODIyfQ.z1G3FtyUk2Lxj9ZIfu3HErnQoJzB1a3udntvnwVOBK0";
// API call to create a meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  console.log('meeting id:',res)
  const { roomId } = await res.json();
  return roomId;
};