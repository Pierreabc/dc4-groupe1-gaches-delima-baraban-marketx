const express = require('express');
const app = express();
const port = 3000;
// Données fictives pour les campagnes
const campaigns = [
    {
        nom: "Campagne A",
        description: "Description de la Campagne A",
        dateDebut: "2023-01-01",
        dateFin: "2023-12-31",
        budget: 10000
    },
    {
        nom: "Campagne B",
        description: "Description de la Campagne B",
        dateDebut: "2023-02-01",
        dateFin: "2023-08-31",
        budget: 20000
    }
];
// Endpoint pour récupérer toutes les campagnes
app.get('/api/campaigns', (req, res) => {
    res.json(campaigns);
});
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});