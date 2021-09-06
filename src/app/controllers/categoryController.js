const categoriesRepository = require('../database/repositories/categoryRepository');

module.exports = {
    async getCategories(req, res) {
        try {
            const categories = await categoriesRepository.getAllCategories();
            if (categories.length > 0)
                return res.status(200).json(categories);
            else 
                return res.status(404).json(categories);
        } catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}