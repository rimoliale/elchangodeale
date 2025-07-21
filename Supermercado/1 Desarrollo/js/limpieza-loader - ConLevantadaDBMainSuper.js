(function () {
  const productos = JSON.parse(localStorage.getItem("productosLimpieza") || "[]");

  if (!productos.length) {
    console.warn("❌ No se encontraron productosLimpieza en localStorage");
    return;
  }

  const contenedor = document.querySelector("ul.products.columns-5");
  if (!contenedor) {
    console.warn("❌ No se encontró el contenedor ul.products.columns-5");
    return;
  }

  const imagenDefault = "images/Limpieza.jpg";

  productos.forEach((p, idx) => {
    const li = document.createElement("li");
    li.className = 'ast-col-sm-12 ast-article-post desktop-align-center tablet-align-center mobile-align-center ast-col-md-6 ast-product-gallery-layout-horizontal ast-product-single-variable ast-product-tabs-layout-horizontal product type-product post-' + (13000 + idx) + ' status-publish instock product_cat-limpieza has-post-thumbnail featured shipping-taxable purchasable product-type-variable';

    li.innerHTML = `
      <div class="astra-shop-thumbnail-wrap">
        <a class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
          <img src="${imagenDefault}" alt="${p.producto}">
        </a>
      </div>
      <input type="hidden" class="wpmProductId" data-id="${13000 + idx}">
      <div class="astra-shop-summary-wrap">
        <span class="ast-woo-product-category">Limpieza</span>
        <h2 class="woocommerce-loop-product__title granolaProducto">${p.producto}</h2>
        <span class="price">
          <div class="price">
            <span class="woocommerce-Price-amount amount">
              <bdi><span class="woocommerce-Price-currencySymbol">$</span>${p.precioFinal.toLocaleString("es-AR")}</bdi>
            </span>
          </div>
        </span>
        <a data-quantity="1" class="button product_type_variable add_to_cart_button thwvs_add_to_cart_button thwvs_ajax_add_to_cart"
           href="Intermediate-Web-Wa Chango Ale.html"
           style="display: block;"
           data-product_id="${13000 + idx}"
           aria-label="Comprar ${p.producto}"
           rel="nofollow">Comprar</a>
      </div>
    `;

    contenedor.appendChild(li);
  });

  console.log(`🧼 ${productos.length} productos de limpieza insertados desde localStorage`);
})();
