const express = require('express');
const router = express.Router();
const photoModel = require('../models/photoModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: './public/photos/',
    filename: function (req, file, cb) {
        let fileName = new Date().getTime() + '_' + file.originalname
        cb(null, fileName);
    }
  })

const upload = multer({storage: storage});


router.get('/', (req, res, next) => {
    photoModel.find((err, photos) => {
        res.send(photos);
    })
});

router.post('/', upload.single('photo'), (req, res, next) => {
    console.log('Da file', req.file);
    let photo = new photoModel();
    photo.path = req.file.path
    photo.createdAt = new Date();

    photo.save((err, newPhoto) => {
        if (err)
            return console.error('Error uploading photo', err);
        
        console.log('Photo uploaded successfully');
        res.send({
            success: true,
            photo: newPhoto
        });
    });
});

router.put('/:photoId', upload.single('photo'), (req, res, next) => {
    let photoId = req.params.photoId;
    //deleted old file
    photoModel.findOne({_id: photoId}, (err, photo) => {
        fs.unlinkSync(photo.path);
        console.log('Old file deleted: ', photo.path);
        photo.path = req.file.path;
        photoModel.update({_id: photoId}, {
            path: req.file.path
        }, err => {
            console.log('Photo updated successfully');
            res.send({
                success: true,
                photo: photo
            });
        });
    });
});

router.delete('/:photoId', (req, res, next) => {
    let photoId = req.params.photoId;

    photoModel.findOne({_id: photoId}, (err, photo) => {
        if (err)
            return console.error('Error deleting photo', err);
        
        photoModel.deleteOne({_id: photoId}, err => {
            fs.unlinkSync(photo.path);
            res.send({
                success: true,
                message: 'Photo deleted successfully'
            });
        });
    });
});

module.exports = router;