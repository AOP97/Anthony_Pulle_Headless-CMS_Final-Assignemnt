async function loadStatsCards() {
    const response = await fetch('../data/data.json'); 
    const stats = await response.json(); 
    console.log("Stats loaded:", stats);
  
    const container = document.getElementById('statsCardsContainer');
    container.innerHTML = '';
  
    stats.forEach((stat) => {
      const col = document.createElement('div');
      col.className = 'col-md-3';
  
      const card = `
        <div class="card text-center ${stat.highlight ? 'border-start border-4 ' + stat.highlight : ''}">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">${stat.title}</h6>
            <h3 class="card-title">${stat.count}</h3>
          </div>
        </div>`;
  
      col.innerHTML = card;
      container.appendChild(col);
    });
  }
  
  loadStatsCards();