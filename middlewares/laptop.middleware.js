const CustomError = require('../errors/customError');
const { Laptop } = require('../db');
const { BAD_REQUEST, NOT_FOUND } = require('../constants/error-codes.enum');

module.exports = {
    isFullDataInLaptopRequest: (req, res, next) => {
        try {
            const { model, price } = req.body;

            if (!model || !price) {
                throw new CustomError('Some data missed', BAD_REQUEST);
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
                throw new CustomError('Laptop not found', NOT_FOUND);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
