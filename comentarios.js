document.getElementById("form-reporte").addEventListener("submit", e => {
  e.preventDefault();
  const reporte = {
    localidad: document.getElementById("localidad").value,
    tipo: document.getElementById("tipo").value,
    descripcion: document.getElementById("descripcion").value,
    fecha: new Date().toLocaleString()
  };

  let reportes = JSON.parse(localStorage.getItem("reportes")) || [];
  reportes.push(reporte);
  localStorage.setItem("reportes", JSON.stringify(reportes));
  mostrarReportes();
});

function mostrarReportes() {
  const cont = document.getElementById("lista-reportes");
  cont.innerHTML = "";
  let reportes = JSON.parse(localStorage.getItem("reportes")) || [];
  reportes.forEach(r => {
    const item = document.createElement("p");
    item.textContent = `[${r.fecha}] ${r.localidad} - ${r.tipo}: ${r.descripcion}`;
    cont.appendChild(item);
  });
}

mostrarReportes();
