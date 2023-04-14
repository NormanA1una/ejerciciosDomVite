import countdown from "./cuenta_regresiva.js";
import userDiviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import searchFilter from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import { responsiveTester } from "./prueba_responsive.js";
import { digitalClock, alarm } from "./relojYAlarma.js";
import { scrollTop } from "./scroll_top_btn.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-bttn", ".panel", ".menu a");
  digitalClock("#reloj", "#empezar-reloj", "#detener-reloj");
  alarm(
    "Assets/rengoku_hono_no_kokyu.mp3",
    "#empezar-alarma",
    "#detener-alarma"
  );
  countdown("countdown", "Feb 27, 2024 05:00:00", "Feliz Cumpleañoooooos!!");
  scrollTop(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href= "https://youtu.be/IRyMoHJu-i8" target="_blank" rel= "noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/IRyMoHJu-i8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmap",
    "(min-width: 1024px)",
    `<a href= "https://goo.gl/maps/fDpQVQnPAajNS5v87" target="_blank" rel= "noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.64372504344!2d-85.9555466858743!3d11.929863940107191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f740c94de092f83%3A0xb4775303e05d565f!2sCatedral%20Inmaculada%20Concepci%C3%B3n%20de%20Mar%C3%ADa!5e0!3m2!1ses!2sni!4v1679093197820!5m2!1ses!2sni" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDiviceInfo("user-device");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode", "stage-gray");
networkStatus();
