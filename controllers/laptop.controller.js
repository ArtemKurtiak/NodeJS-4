const { Laptop } = require('../db');

module.exports = {
    getAllLaptops: async (req, res, next) => {
        try {
            const laptops = await Laptop.find({});

            res
                .status(200)
                .json(laptops);
        } catch (e) {
            next(e);
        }
    },

    createLaptop: async (req, res, next) => {
        try {
            await Laptop.create({
                ...req.body
            });

            res
                .status(201)
                .json({ message: 'Created' });
        } catch (e) {
            next(e);
        }
    },

    updateLaptop: async (req, res, next) => {
        try {
            const { laptopId } = req.params;

            await Laptop.findByIdAndUpdate(laptopId, { ...req.body });

            res
                .status(200)
                .json({ message: 'Updated' });
        } catch (e) {
            next(e);
        }
    },

    deleteLaptop: async (req, res, next) => {
        try {
            const { laptopId } = req.params;

            await Laptop.findByIdAndDelete(laptopId);

            res
                .status(200)
                .json({ message: 'Deleted' });
        } catch (e) {
            next(e);
        }
    },

    getLaptopById: async (req, res, next) => {
        try {
            const { laptopId } = req.params;

            const laptop = await Laptop.findById(laptopId);

            res
                .status(200)
                .json(laptop);
        } catch (e) {
            next(e);
        }
    }
};
