import React from "react";
import SearchInput from "react-search-input";
import Gallery from "react-photo-gallery";

// Define the array of photos to display in the gallery
const photos = [
{
src: "https://example.com/photo1.jpg",
width: 4,
height: 3
},
{
src: "https://example.com/photo2.jpg",
width: 1,
height: 1
},
// ...
];

class App extends React.Component {
state = {
searchTerm: ""
};

// Update the search term when the user types in the search input
updateSearchTerm = searchTerm => {
this.setState({ searchTerm });
};

render() {
// Filter the photos array based on the search term
const filteredPhotos = photos.filter(photo =>
photo.src.includes(this.state.searchTerm)
);


return (
  <div>
    {/* The search input */}
    <SearchInput
      placeholder="Search..."
      onChange={this.updateSearchTerm}
    />

    {/* The photo gallery */}
    <Gallery className="photo-gallery" photos={filteredPhotos} />
  </div>
);
}
}



