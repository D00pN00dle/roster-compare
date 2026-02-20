// Function to parse first words from a string
function parseFirstWords(string) {
  try {
    // Split the file content into lines, trim, and extract first word
    return string.split('\n')
      .map(line => line.trim())
      .filter(line => line !== '') // Remove empty lines
      .map(line => line.split(/\s+/)[0]); // Split by whitespace and take first word
  } catch (error) {
    console.error('Error parsing file content:', error);
    return [];
  }
}

// Function to find items from the first list not in the second list
function findMissingItems(list1, list2) {
  const set2 = new Set(list2);
  
  // Find items from list1 that are not in list2
  return list1.filter(item => !set2.has(item));
}

// Main function to run the comparison
export function findMissingMembers(content1, content2) {
  const firstWords1 = parseFirstWords(content1);
  const firstWords2 = parseFirstWords(content2);

  const missingItems = findMissingItems(firstWords1, firstWords2);

  console.log('Items from first file not found in second file:', missingItems);

  return missingItems;
}


// Example usage
//findMissingMembers('Kaioken_fangbreaker-20251016-121749 - Copy.txt', 'Kaioken_fangbreaker-20251016-121749.txt');
