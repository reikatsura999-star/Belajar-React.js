import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { productId } = useParams()

  // contoh data dummy
  const products = {
    1: { name: 'Laptop Gaming', price: '15.000.000', description: 'Laptop dengan GPU RTX terbaru' },
    2: { name: 'Smartphone', price: '5.000.000', description: 'HP dengan kamera 108MP' },
    3: { name: 'Headphone', price: '1.500.000', description: 'Suara bass mantap' }
  }

  const product = products[productId]

  if (!product) {
    return <h2>Produk tidak ditemukan</h2>
  }

  return (
    <div>
      <h2>Detail Produk</h2>
      <p><strong>Nama:</strong> {product.name}</p>
      <p><strong>Harga:</strong> Rp {product.price}</p>
      <p><strong>Deskripsi:</strong> {product.description}</p>
    </div>
  )
}

export default ProductDetail
