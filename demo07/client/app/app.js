const controller = new PedidoController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller)); 