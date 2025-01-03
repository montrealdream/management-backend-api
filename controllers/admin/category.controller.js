// service
const CategoryService = require('../../services/category.service');

// core response
const { SuccessResponse } = require('../../core/success.response');

// [POST] /admin/categories/create
/**
 * @description Tạo danh mục mới
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.createNewCategory = async (req, res, next) => {
    new SuccessResponse({
        message: 'Tạo danh mục mới thành công',
        metadata: await CategoryService.createNewCategory({
            ...req.body
        })
    }).send(res);
}