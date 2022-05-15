const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts');

// 查詢所有資料
router.get('/', PostController.getPosts);

// 新增單筆資料
router.post('/', PostController.createPost);

// 刪除所有資料

// 刪除單筆資料

// 修改單筆資料

module.exports = router;
