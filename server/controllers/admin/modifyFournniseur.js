const Fournniseur = require('../../model/Fournniseur');

const modifyFournniseur = async (req, res) => {
    try {
        const fournniseurId = req.params.id;
        const updatedFournniseurData = req.body;

        const updatedFournniseur = await Fournniseur.findByIdAndUpdate(
            fournniseurId,
            updatedFournniseurData,
            { new: true }
        );

        if (!updatedFournniseur) {
            return res.status(404).json({ error: 'Fournniseur not found' });
        }

        res.json(updatedFournniseur);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = modifyFournniseur;