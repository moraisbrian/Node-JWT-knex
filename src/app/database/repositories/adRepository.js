const dbContext = require('../dbContext');

exports.getAllAds = async _ => {
    return await dbContext('Ad').select('*');
}

exports.getAdById = async id => {
    return await dbContext('Ad').select('*').where('Id', id).first();
}

exports.addAd = async ad => {
    return await dbContext('Ad').insert({
        Title: ad.title,
        Description: ad.description,
        CategoryId: ad.categoryId,
        Price: ad.price,
        HidePhone: ad.hidePhone,
        Status: ad.status,
        CreatedAt: ad.createdAt,
        UserId: ad.userId,
        Views: ad.views
    }).returning('*');
}

exports.deleteAd = async id => {
    return await dbContext('Ad').where('Id', id).del();
}

exports.updateAd = async ad => {
    return await dbContext('Ad')
        .where('Id', ad.id)
        .update({
            Title: ad.title,
            Description: ad.description,
            CategoryId: ad.categoryId,
            Price: ad.price,
            HidePhone: ad.hidePhone,
            Status: ad.status,
            CreatedAt: ad.createdAt,
            UserId: ad.userId,
            Views: ad.views
        });
}