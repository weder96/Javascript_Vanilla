class PedidoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._pedidos = new Pedidos();
    }

    adiciona(event) {
        debugger;
        event.preventDefault();
        this._pedidos.adiciona(this._criapedido());
        console.log(this._pedidos);
        this._limpaFormulario();
        
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criapedido() {

        return new Pedido(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}