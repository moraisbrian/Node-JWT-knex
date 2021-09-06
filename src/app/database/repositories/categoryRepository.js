const dbContext = require('../dbContext');

exports.getAllCategories = async _ => {
    return await dbContext('Category').select('*');
}