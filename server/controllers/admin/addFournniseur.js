const Fournniseur = require('../../model/Fournniseur');

const addFournniseur = async (req, res) => {
    try {
        const { companyName, companyDescription,
             companyDomaine, companyImage } = req.body;

        const fournniseur = new Fournniseur({
            companyName,
            companyDescription,
            companyDomaine,
            companyImage,
        });


        await fournniseur.save();

        res.send('fournniseur added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = addFournniseur;

