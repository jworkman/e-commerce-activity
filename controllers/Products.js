const { Product } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll()
	res.render('views/products/index', { products })
	// res.json(products)
}

const form = async (req, res) => {
	if (req.params.id) {
		const product = await Product.findByPk(req.params.id)
		res.render('views/products/edit', { product })
	} else {
		res.render('views/products/create')
	}
}

const show = async (req, res) => {
	const product = await Product.findByPk(req.params.id)
	res.render('views/products/show', { product })
}

const create = async (req, res) => {
	const product = await Product.create(req.body)
	res.redirect('/products/' + product.id)
}

const update = async (req, res) => {
	const product = await Product.update(req.body, {
		where: { id: req.params.id }
	})
	res.redirect('/products/' + req.params.id)
}

const remove = async (req, res) => {
	const products = await Product.destroy({ where: { id: req.params.id }})
	res.redirect('/products')
}

module.exports = { index, form, show, create, update, remove }