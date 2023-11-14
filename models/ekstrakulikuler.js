const mongoose = require('mongoose')

const ekstrakulikulerSchema =  new mongoose.Schema({
    id: {
        type: Number,
        required: true,        
    },
    nama: {
        type: String,
        required: true,
      },
      pembimbing: {
        type: String,
        required: true,
      },
      jadwalKegiatan: {
        type: String,
        required: true,
      },
      tempatKegiatan: {
        type: String,
        required: true,
      },
      jumlahAnggota: {
        type: Number,
        required: true,
      },
      deskripsi: {
        type: String,
      },
});

module.exports = mongoose.model('Ekstrakulikuler', ekstrakulikulerSchema)