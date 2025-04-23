const controller = new PedidoController();

const $_doc = document.querySelector.bind(document);

$_doc('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));

$_doc('#botao-apaga')
    .addEventListener('click', controller.apaga.bind(controller));

$_doc('#botao-importa')
    .addEventListener('click', controller.importaPedidos.bind(controller));