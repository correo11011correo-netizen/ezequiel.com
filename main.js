fetch("data/eventos.json")
  .then(res => res.json())
  .then(eventos => {
    const cont = document.getElementById("lista-eventos");
    eventos.forEach(ev => {
      const item = document.createElement("p");
      item.textContent = `${ev.fecha} - ${ev.titulo} (${ev.lugar})`;
      cont.appendChild(item);
    });
  });
