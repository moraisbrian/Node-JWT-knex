const adRepository = require('../database/repositories/adRepository');
const Ad = require('../models/ad');

module.exports = {
    async getAds(req, res) {
        try {
            const ads = await adRepository.getAllAds();
            if (ads.length > 0)
                return res.status(200).json(ads);
            else 
                return res.status(404).json(ads); 
        } catch (e) {
            return res.status(500).send(`Erro de processamento: ${e.message}`);
        }
    },

    async addAd(req, res) {
        try {
            const ad = new Ad();
            ad.title = req.body.title;
            ad.description = req.body.description;
            ad.categoryId = req.body.categoryId;
            ad.price = req.body.price;
            ad.hidePhone = req.body.hidePhone;
            ad.status = req.body.status;
            ad.createdAt = req.body.createdAt;
            ad.userId = req.body.userId;
            ad.views = req.body.views;

            const inserted = await adRepository.addAd(ad);

            return res.status(201).json(inserted);
        } catch (e) {
            return res.status(500).send(`Erro de processamento: ${e.message}`);
        }
    },

    async getAdById(req, res) {
        try {
            if (req.params.id) {
                const ad = await adRepository.getAdById(req.params.id);
                if (ad) 
                    return res.status(200).json(ad);
                else
                    return res.status(404).json(ad);
            } else {
                return res.status(400).send('Id inválido');
            }
        } catch (e) {
            return res.status(500).send(`Erro de processamento: ${e.message}`);
        }
    },

    async deleteAd(req, res) {
        try {
            if (req.params.id) {
                const deleted = await adRepository.deleteAd(req.params.id);
                if (deleted) 
                    return res.status(200).json(deleted);
                else
                    return res.status(404).json(deleted);
            } else {
                return res.status(400).send('Id inválido');
            }
        } catch (e) {
            return res.status(500).send(`Erro de processamento: ${e.message}`);
        }
    },

    async updateAd(req, res) {
        try {
            if (req.params.id) {
                const ad = new Ad();
                ad.id = req.params.id;
                ad.title = req.body.title;
                ad.description = req.body.description;
                ad.categoryId = req.body.categoryId;
                ad.price = req.body.price;
                ad.hidePhone = req.body.hidePhone;
                ad.status = req.body.status;
                ad.createdAt = req.body.createdAt;
                ad.userId = req.body.userId;
                ad.views = req.body.views;

                const updated = await adRepository.updateAd(ad);
                
                if (updated) 
                    return res.status(200).json(updated);
                else
                    return res.status(404).json(updated);
            } else {
                return res.status(400).send('Id inválido');
            }
        } catch (e) {
            return res.status(500).send(`Erro de processamento: ${e.message}`);
        }
    }
}