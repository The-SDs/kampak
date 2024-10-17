import { GOOGLE_API_KEY } from "$env/static/private";

export async function getDistanceMatrix(
  userLocation: string,
  schoolLocation: string
) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${userLocation}&destinations=${schoolLocation}&key=${GOOGLE_API_KEY}`
  );
  const data = await response.json();

  if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
    const distanceInMeters = data.rows[0].elements[0].distance.value; // distance in meters
    return distanceInMeters / 1000; // convert meters to kilometers
  } else {
    throw new Error("Error fetching distance from Google Distance Matrix API");
  }
}
