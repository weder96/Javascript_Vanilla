class PedidoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._pedidos = new Pedidos(model => {
            console.log(this);
            this._pedidosView.update(model);
        });

        this._pedidosView = new PedidosView('#pedidos');
        this._pedidosView.update(this._pedidos);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }
    adiciona(event) {

        event.preventDefault();
        this._pedidos.adiciona(this._criapedido());
        this._mensagem.texto = 'Pedido adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
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

    apaga() {

        this._pedidos.esvazia();
        this._mensagem.texto = 'Pedidos apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}