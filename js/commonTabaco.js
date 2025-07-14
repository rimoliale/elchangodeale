

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))
	
	
	
const textoQuienesSomos = `El Chango de Ale se encarga de ofrecer al público la venta de productos cotidianos de forma personalzada hasta la llegada a su puerta, fundada y gestionada por Alejandro D Rimoli`;

    // Aplicar como title (tooltip)
    const btnQuienesSomos = document.getElementById("InfoQuienesSomos-Barra");
    btnQuienesSomos.setAttribute("title", textoQuienesSomos);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnQuienesSomos);

    // Aplicar como contenido de <p>
    const parrafoQuienesSomos = document.getElementById("contenidoQuienesSomos");
    parrafoQuienesSomos.innerText = textoQuienesSomos;
	
	
	
	
	
		    const textoEnvio = `Los pedidos confirmados antes de las 15hs los días hábiles son armados en el momento y programados para la entrega.

			Se entregan días Miércoles y Viernes.(2 días de antelación y antes de las 15hs).
			Se pueden pactar para entregar en el dia despues de las 18hs a 21hs ó de 9 a 12hs.
			Ejemplo: 
			1 - Si se pide un Lunes a las 14:00hs, llega el Miércoles. 
			2 - Si se pide un Lunes a las 15:00hs ya pasaría a entregarse el Viernes.
			3 - Si se pide un Mártes, ya pasaría a entregarse el Viernes.
			
			(Contando desde Estaciòn Banfield)
			Menos de 5km(50 cuadras) $5000. 
			Cualquier distancia Mayor a 5km(50 cuadras) $6000.`;


    // Aplicar como title (tooltip)
    const btnEnvio = document.getElementById("InfoEnvios-Barra");
    btnEnvio.setAttribute("title", textoEnvio);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnEnvio);

    // Aplicar como contenido de <p>
    const parrafoEnvio = document.getElementById("contenidoEnvios");
    parrafoEnvio.innerText = textoEnvio;
	
	
	
	
	const textoFormasPago = `- Mercado Pago<br>- Efectivo<br>- Transferencia Bancaria`;

	// Aplicar como contenido del tooltip con HTML
	const btnFormasPago = document.getElementById("InfoFormasPago-Barra");
	btnFormasPago.setAttribute("title", textoFormasPago);
	btnFormasPago.setAttribute("data-bs-html", "true"); // por si acaso

	// Activar tooltip HTML
	new bootstrap.Tooltip(btnFormasPago);

	// Aplicar también dentro del <p>
	const parrafoFormasPago = document.getElementById("contenidoFormasPago");
	parrafoFormasPago.innerHTML = textoFormasPago;


	
	
	const textoComoComprar = `- Nuestra via directa de compra y consultas es Whatsapp - 1171104740. 
	- Horario de Atenciòn: De 9 a 20hs
	- Compra mìnima NO HAY.`;

    // Aplicar como title (tooltip)
    const btnComoComprar = document.getElementById("InfoComoComprar-Barra");
    btnComoComprar.setAttribute("title", textoComoComprar);

    // Activar Bootstrap tooltip
    new bootstrap.Tooltip(btnComoComprar);

    // Aplicar como contenido de <p>
    const parrafoComoComprar = document.getElementById("contenidoComoComprar");
    parrafoComoComprar.innerText = textoComoComprar;

	
	  document.addEventListener("DOMContentLoaded", function () {
  

  
    const mainNav = document.getElementById("main-nav-items");
    const mobileMenu = document.getElementById("mobile-clone");

    if (mainNav && mobileMenu) {
      // Clona solo los <li>, no el <ul>
      const items = mainNav.querySelectorAll("li");
      items.forEach(item => {
        mobileMenu.appendChild(item.cloneNode(true));
      });
    }
	
	  if (window.innerWidth >= 768) {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
	  
	  
    });
  }
  
  	  


  });
  
  
setTimeout(() => {
  const toggle = document.getElementById("menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const overlay = document.querySelector(".overlay");

  // Cierra el menú al hacer clic en cualquier enlace del menú
  sideMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.checked = false;
    });
  });
}, 23); // espera 200ms después de insertar el header

if (window.innerWidth < 768) {
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipElements.forEach(el => {
    const tooltipInstance = bootstrap.Tooltip.getInstance(el);
    if (tooltipInstance) {
      tooltipInstance.dispose();
    }
    el.removeAttribute("data-bs-toggle");
    el.removeAttribute("title");
  });
}

$('#InfoQuienesSomos-Barra, #InfoEnvios-Barra, #InfoFormasPago-Barra, #InfoComoComprar-Barra').on('click', function () {
  $('.css-1nuilh8').removeClass('force-visible');
});

$(document).on('click', '#SubirInicio', function () {
  $('.css-1nuilh8').addClass('force-visible');
});


$('bdi').each(function () {
  const $bdi = $(this);
  const text = $bdi.text().trim(); // Ej: "$3.528"

  const numberMatch = text.match(/[\d.,]+/);
  if (!numberMatch) return;

  let raw = numberMatch[0]
    .replace(/\./g, '') // quita puntos (miles)
    .replace(/,/g, ''); // quita comas

  let value = parseFloat(raw);
  if (isNaN(value)) return;

  // ✅ Aplicar nuevo factor: 0.9375
  let result = Math.round(value * 0.9375);

  // Reemplazar en el HTML sin decimales ni separadores
  $bdi.html('<span class="woocommerce-Price-currencySymbol">$</span>' + result);
});
