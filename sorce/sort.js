window.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('studentTableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const idA = a.children[1].textContent.trim();
      const idB = b.children[1].textContent.trim();
      return idA.localeCompare(idB);
    });

    tbody.innerHTML = '';
    rows.forEach((row, index) => {
      row.children[0].textContent = index + 1;
      tbody.appendChild(row);
    });
});

