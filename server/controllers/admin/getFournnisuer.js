const express = require('express');
const router = express.Router();
const Fournniseur = require('../../model/Fournniseur')
router.get('/getFournniseur', async (req, res) => {
    try {
        const fournniseur = await Fournniseur.find();
        res.status(200).json(fournniseur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;