// Gallery data
export const galleryData = [
  {
    id: 1,
    title: "Bridge Construction Project",
    description: "Modern bridge construction over water",
    thumbnail: "https://images.pexels.com/photos/1166441/pexels-photo-1166441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullImage: "https://images.pexels.com/photos/1166441/pexels-photo-1166441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Water Treatment Facility",
    description: "Clean water treatment plant installation",
    thumbnail: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullImage: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Irrigation Canal Development",
    description: "Technical irrigation channel construction",
    thumbnail: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullImage: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Road Construction",
    description: "Highway infrastructure development",
    thumbnail: "https://images.pexels.com/photos/2846001/pexels-photo-2846001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullImage: "https://images.pexels.com/photos/2846001/pexels-photo-2846001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Function to add new gallery items
export function addGalleryItem(item) {
  galleryData.push({
    id: galleryData.length + 1,
    ...item
  });
}