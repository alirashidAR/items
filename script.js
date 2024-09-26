// items_script.js

// GET request
fetch('https://solaris-backend-ckvh.vercel.app/items')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // parse the JSON from the response
  })
  .then(data => {
    const itemsTableBody = document.getElementById('items');
    itemsTableBody.innerHTML = ''; // Clear any existing content

    data.forEach(item => {
      const row = document.createElement('tr');

      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const quantityCell = document.createElement('td');
      quantityCell.textContent = item.quantity;
      row.appendChild(quantityCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = item.price;
      row.appendChild(priceCell);

      itemsTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
