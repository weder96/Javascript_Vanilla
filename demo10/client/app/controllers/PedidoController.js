class PedidoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._pedidos = new Bind(
            new Pedidos(), 
            new PedidosView('#pedidos'),
            'adiciona', 'esvazia'
        );

        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView('#mensagemView'),
            'texto'
        );
    }

    adiciona(event) {

        event.preventDefault();
        this._pedidos.adiciona(this._criapedido());
        this._mensagem.texto = 'Pedido adicionado com sucesso';
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
        this._mensagem.texto = 'Pedidos apagados com sucesso';
    }
}