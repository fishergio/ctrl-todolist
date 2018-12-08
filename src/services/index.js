

const saveDataLocal = (data) => {

  //console.log("Datos guardados en el localStorage");

  let saveData = JSON.stringify(data);

  localStorage.setItem('tasks', saveData);
}

const loadDataLocal = () => {

  //console.log("Cargando datos del localStorage");

  let loadData = localStorage.getItem('tasks');

  return (loadData) ? JSON.parse(loadData) : []

}

export { saveDataLocal, loadDataLocal }

