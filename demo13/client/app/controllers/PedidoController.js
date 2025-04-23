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

        this._service = new PedidoService();
    }

    adiciona(event) {

        try {

            event.preventDefault();
            this._pedidos.adiciona(this._criapedido());
            this._mensagem.texto = 'Pedido adicionada com sucesso';
            this._limpaFormulario();

        } catch (err) {

            console.log(err);
            console.log(err.stack);

            if (err instanceof DataInvalidaException) {

                this._mensagem.texto = err.message;

            } else {

                this._mensagem.texto = 'Um erro não esperado aconteceu. Entre em contato com o suporte';
            }
        }
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
    }

    importaPedidos() {

        this._service
            .obtemPedidosDoPeriodo()
            .then(pedidos => {

                pedidos.filter(novapedido =>

                    !this._pedidos.paraArray().some(pedidoExistente =>

                        novapedido.equals(pedidoExistente)))

                    .forEach(pedido => this._pedidos.adiciona(pedido));

                this._mensagem.texto = 'Pedidos do período importadas com sucesso';
            })
            .catch(err => this._mensagem.texto = err);
    }
}