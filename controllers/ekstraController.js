const ekstrakulikuler = require('../models/ekstrakulikuler')
const Ekstrakulikuler = require('../models/ekstrakulikuler')

module.exports = {
    // get all 
    index: async (req, res) => {
        try {
            const ekstra = await Ekstrakulikuler.find()
            if(ekstra.length > 0){
                res.status(200).json({
                    status: true,
                    data: ekstra,
                    method: req.method,
                    url: req.url
                })
            }else{
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({success: false})
        }
    },
    show: async (req, res) => {
        const {id} = req.params;
        try {
            const ekstra = await ekstrakulikuler.findOne({id})
            res.json({
                status: true,
                data: ekstra,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try {
            const ekstra = await ekstrakulikuler.create(req.body)
            res.status(200).json({
                status: true,
                data: ekstra,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
      },
      update: async (req, res) => {
        const {id} = req.params;
        try {
            const ekstra = await ekstrakulikuler.findOneAndUpdate({id}, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: ekstra,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },
    delete: async (req, res) => {
        const {id} = req.params;
        try {
            await ekstrakulikuler.findOneAndDelete({id})
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
        
    },
    showNama: async (req, res) => {
        const {nama} = req.params;
        try {
            const ekstra = await ekstrakulikuler.findOne({nama})
            res.json({
                status: true,
                data: ekstra,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat",
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    }
}