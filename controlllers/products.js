const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "I'm getting products" });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "I'm getting products testing" });
};

module.exports = {
    getAllProducts,
    getAllProductsTesting
};
