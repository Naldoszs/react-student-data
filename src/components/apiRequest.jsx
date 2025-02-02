const apiRequest = async (
  url,
  options = {},
  alertMsg,
  errorMessage = "An error occurred"
) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Reload the page and try again");
    } else {
      alert(alertMsg);
      return await response.json(); // Return the fetched data
    }
  } catch (error) {
    console.error(`${errorMessage}: ${error.message}`);
    return null; // Return null on failure
  } finally {
    console.log(`API request to ${url} completed.`); // More informative log
  }
};

export default apiRequest;
