const CustomError = require('../errors/customError');
const { Laptop } = require('../db');

module.exports = {
    isFullDataInLaptopRequest: (req, res, next) => {
        try {
            const { model, price } = req.body;

            if (!model || !price) {
                throw new CustomError('Some data missed', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isLaptopByIdExists: async (req, res, next) => {
        try {
            const { laptopId } = req.params;

            const laptop = await Laptop.findById(laptopId);

            if (!laptop) {
                throw new CustomError('Laptop not found', 404);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
