exports.getAllProducts = (req, res) => {

    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 65000
        },
        {
            id: 2,
            name: "Keyboard",
            price: 1500
        }
    ]);

};

exports.getProductById = (req, res) => {

    const id = req.params.id;

    res.json({
        id: id,
        name: "Laptop",
        price: 65000
    });

};
