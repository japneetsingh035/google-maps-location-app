# Google Maps Location App

![google-maps-screenshot](<google-maps-location-app/src/assets/Screenshot 2024-09-11 at 4.33.45 PM.png>)

This project is a React-based application that allows users to:
- Search for and pin multiple locations on a Google Map.
- Capture and save a map screenshot with all pinned locations using the Google Maps Static API.
- View and capture Street View images for specific pinned locations.
- Share the locations via a link, including all marked locations.

## Features

1. **Search for Locations:**
   - Users can search for locations using the Google Places Autocomplete feature.
   - The map pans to the selected location, allowing users to pinpoint it.

2. **Pin Multiple Locations:**
   - Users can save multiple locations on the map by pinning them with markers.
   - Each marker represents a location and can be labeled with a street address.

3. **Capture Map Screenshot:**
   - Users can generate a static map image showing all pinned locations using the Google Maps Static API.
   - The static map image can be saved and shared.

4. **Street View Integration:**
   - Users can access Street View imagery for any pinned location to view real-world images of the selected location.

5. **Link Sharing:**
   - The app provides a shareable link with all pinned locations, allowing others to view the same map and markers.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Google Maps JavaScript API**: For rendering interactive maps.
- **Google Places Autocomplete API**: For location search and suggestions.
- **Google Maps Static API**: For generating static images of the map with markers.
- **Street View API**: For embedding real-world Street View images.
  
## Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **Google Cloud Project** with the Google Maps JavaScript API, Places API, and Static Maps API enabled.
- An API key from Google Cloud.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/google-maps-location-app.git
cd google-maps-location-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an `.env` file

Create a `.env` file in the root directory and add your Google Maps API key:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### 4. Run the application

Start the app locally:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

### 5. Generate Static Maps & View Street View

Once the app is running:
1. Use the search bar to find locations.
2. Click the "Save Location" button to pin the location on the map.
3. Click "Generate Static Map" to capture and view a static image of all saved locations.
4. View Street View imagery by selecting any pinned location.

## How to Use

1. **Search for a location**: Use the search bar at the top of the map to search for a city, address, or place. Autocomplete suggestions will help guide your search.
2. **Pin the location**: Once the map zooms to the location, click the "Save Location" button to pin it.
3. **View Street View**: Click on any marker to view the Street View imagery for that location.
4. **Capture map**: After pinning all desired locations, click the "Generate Static Map" button to create a screenshot image with all pinned markers.
5. **Share the map**: Once all markers are added, the app generates a link that can be shared with others to view the same map with the saved markers.

## Screenshot

*Add a screenshot of the map and markers*

## Future Enhancements

- **Route Generation**: Show routes between multiple pinned locations.
- **Location Details**: Provide more detailed information for pinned locations (e.g., weather, nearby points of interest).
- **Custom Marker Icons**: Allow users to change the marker icon based on location type (e.g., home, work, etc.).

## Contributions

Feel free to open an issue or submit a pull request if you have suggestions or improvements!

## License

This project is licensed under the MIT License.

