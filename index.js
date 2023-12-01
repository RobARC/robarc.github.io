

var anio  = new Date().getFullYear();

  // Función para contar y mostrar las visitas
  function countVisit() {
    let visitCount = getCookie("visitCount");

    if (visitCount) {
      visitCount = parseInt(visitCount) + 1;
    } else {
      visitCount = 1;
    }

    setCookie("visitCount", visitCount, 365); // La cookie expirará en 365 días

    document.getElementById("visitCounter").textContent = "Visitas: " + visitCount;
}

  // Función para obtener o establecer el valor de una cookie
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + "; path=/";
      }