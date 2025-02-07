const fs = require('fs');

// Specify the path to your JSON file
const filePath = './node_modules/anime-latest-name/adata.json'; // Replace with your file path
function anilatest (fullanimedetails) {
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
     console.error('Error reading file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
//  console.log('Data from JSON file:', jsonData);
    const arr = jsonData.map(anime => anime.title);
    const l1 = Object.values(jsonData).length;
    if (fullanimedetails == "fullanimedetails") {
        console.log(arr);
    } else {
    let r1 = Math.floor(Math.random() * l1)
    console.log(arr[r1]);
    }
    // ... do something with the jsonData ...

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
}
module.exports = anilatest