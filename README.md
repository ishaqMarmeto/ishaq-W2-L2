
Published Link : https://ishaq-week-2-level-2.netlify.app/


# Watch Carousel with Dynamic Description

## Overview
This project creates a watch carousel using Splide.js where the description and background change dynamically based on the current slide.

## Pseudocode

### HTML Structure
1. **Navigation Bar**
   - Create a `nav` element with links to Shop, Brands, Contact Us, and a Sign-Up button.

2. **Content Section**
   - Create a `section` with two main parts:
     - **Description Section**:
       - Title, Subtitle, Description, and Price elements.
       - Social media icons.
     - **Carousel Section**:
       - Initialize an empty Splide list that will be populated dynamically with images.

### CSS Styling
1. **General Styling**
   - Set up basic styles for body, navigation, and content alignment.
   - Use Tailwind CSS for responsive design.
   
2. **Flexbox for Layout**
   - On larger screens, use Flexbox to align the description and carousel sections side by side.

### JavaScript Functionality
1. **Data Initialization**
   - Define an array of objects (`data`), each containing details about the watches (id, image, title, subtitle, description, price, backgroundColor).

2. **DOM Elements**
   - Get references to necessary DOM elements: Splide list, body, title, subtitle, description, price.

3. **Populate Carousel**
   - Iterate over the `data` array.
   - For each watch, create a `li` element with an image and append it to the Splide list.

4. **Splide.js Initialization**
   - Initialize the Splide.js carousel with loop, autoplay, and arrow navigation enabled.

5. **Dynamic Content Update**
   - Define a `setContent` function that:
     - Accepts an index as a parameter.
     - Updates the title, subtitle, description, price, and background based on the selected watch.
   - Initially call `setContent(0)` to display the first watch's details.

6. **Event Listener for Slide Change**
   - Attach an event listener to the Splide carousel that listens for slide changes.
   - Call `setContent` with the new index whenever the slide changes.

### End of Pseudocode
