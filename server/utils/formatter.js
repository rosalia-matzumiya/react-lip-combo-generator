
function formatProduct(product) {
  return {
    id: product.id,
    brand: product.brand,
    shade: product.shade,
  }
}

module.exports = {
  formatProduct
};