import colorMap from '../assets/colorMap/colorMap.json';

// Function to parse first words from a string
function parseItems(string) {
  try {
    // Split the file content into lines, trim, and extract first word
    return string.split('\n')
      .map(line => line.trim())
      .filter(line => line !== '') // Remove empty lines
      .map(line => {
        const words = line.split(/\t/);
        const color = colorMap[words[2].replace(/\s/g, "").toLowerCase()] || "#000000";
        console.log('color:', color);
        return {
          name: words[0],
          level: words[1],
          class: words[2],
          color: colorMap[words[2].replace(/\s/g, "").toLowerCase()] || "#000000"
        };
      }); 
  } catch (error) {
    console.error('Error parsing file content:', error);
    return [];
  }
}

// Function to find items from the first list not in the second list
function findMissingItems(list1, list2) {
  
  // Find items from list1 that are not in list2
  return list1.filter(item => !list2.some(otherItem => otherItem.name === item.name));
}

// Main function to run the comparison
export function findMissingMembers(content1, content2) {
  const rosterA = parseItems(content1);
  const rosterB = parseItems(content2);

  const missingItems = findMissingItems(rosterA, rosterB);

  console.log('Items from first file not found in second file:', missingItems);

  return missingItems;
}


// Example usage
//findMissingMembers('Kaioken_fangbreaker-20251016-121749 - Copy.txt', 'Kaioken_fangbreaker-20251016-121749.txt');
