const standingsElement = document.getElementById('standings');

fetch('https://api.football-data.org/v4/competitions/PL/standings', {
  headers: {
    'X-Auth-Token': '198aae5542e24ceaa7ad4bb54ad561a6', // Substitua 'YOUR_API_KEY' pela sua chave de API
  }
})
  .then(response => response.json())
  .then(data => {
    const standings = data.standings[0].table;

    standingsElement.innerHTML = `
      <table>
        <tr>
          <th>Posição</th>
          <th>Time</th>
          <th>Pontos</th>
        </tr>
        ${standings.map(team => `
          <tr>
            <td>${team.position}</td>
            <td>${team.team.name}</td>
            <td>${team.points}</td>
          </tr>
        `).join('')}
      </table>
    `;
  })
  .catch(error => {
    console.log('Erro:', error);
    standingsElement.innerHTML = 'Ocorreu um erro ao carregar a classificação da Premier League.';
  });
