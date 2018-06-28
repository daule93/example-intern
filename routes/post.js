const express = require('express');
const router = express.Router();


const PostController = require('../app/Controllers/Http/PostController');
const postCtrl = new PostController();

// create
router.post('/', async function(req, res, next) {
  await postCtrl.create();
});

// get all post
router.get('/', async function(req, res, next) {
  await postCtrl.get();
});

// get detail

router.get('/:id', async function(req, res, next) {
  await postCtrl.show();
});

// Edit
router.put('/:id', async function(req, res, next) {
  await postCtrl.edit();
});

// Delete
router.delete('/:id', async function(req, res, next) {
  await postCtrl.delete();
});

module.exports = router;
