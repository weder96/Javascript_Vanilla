class PedidoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        let pedido = new Pedido(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log('pedido.data :',pedido.data);
        
        let diaMesAno = DateConverter.paraTexto(pedido.data);
        console.log('diaMesAno :',diaMesAno);
    }
}