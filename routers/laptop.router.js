const router = require('express').Router();

const {
    getAllLaptops, createLaptop, updateLaptop, deleteLaptop, getLaptopById
} = require('../controllers/laptop.controller');
const { isFullDataInLaptopRequest, isLaptopByIdExists } = require('../middlewares/laptop.middleware');

router.get('/', getAllLaptops);

router.get('/:laptopId', isLaptopByIdExists, getLaptopById);

router.post('/', isFullDataInLaptopRequest, createLaptop);

router.patch('/:laptopId', isLaptopByIdExists, updateLaptop);

router.delete('/:laptopId', isLaptopByIdExists, deleteLaptop);

module.exports = router;
