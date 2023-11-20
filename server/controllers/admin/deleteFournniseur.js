const Fournniseur = require("../../model/Fournniseur");

const deleteFournniseur = async (req, res) => {
    const fournniseurId = req.params.id;

    try {
        // Supprimer le personnel de la base de données
        await Fournniseur.findByIdAndDelete(fournniseurId);
        res.send("Le Fournniseur a été supprimé avec succès.");
    } catch (error) {
        res
            .status(500)
            .send("Une erreur s'est produite lors de la suppression du fournniseur.");
    }
};

module.exports = deleteFournniseur;