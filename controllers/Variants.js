const { Variant, Product } = require('../models')

const index = async (req, res) => {
	const variants = await Variant.findAll()
	res.render('views/variants/index', { variants })
	// res.json(variants)
}

const form = async (req, res) => {
	const products = await Product.findAll()
	if (req.params.id) {
		const variant = await Variant.findByPk(req.params.id)
		res.render('views/variants/edit', { variant, products })
	} else {
		res.render('views/variants/create', { products })
	}
}

const show = async (req, res) => {
	const variant = await Variant.findByPk(req.params.id)
	const product = await variant.getProduct()
	res.render('views/variants/show', { variant, product })
}

const create = async (req, res) => {
	const variant = await Variant.create(req.body)
	res.redirect('/variants/' + variant.id)
}

const update = async (req, res) => {
	const variant = await Variant.update(req.body, {
		where: { id: Number(req.params.id) }
	})
	res.redirect('/variants/' + req.params.id)
}

const remove = async (req, res) => {
	const variants = await Variant.destroy({ where: { id: req.params.id }})
	res.redirect('/variants')
}

module.exports = { index, form, show, create, update, remove }