export async function fetchPlanningData() {
  try {
    const response = await fetch("/api/planning", {
      // Adding cache control for production
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch planning data");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching planning data:", error);
    return [];
  }
}
