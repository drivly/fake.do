const categories = []

export default {
  '/': () => categories,
  '/:category': ({category}) => categories[category],
}
