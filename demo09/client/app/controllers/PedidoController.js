class PedidoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        const self = this;
        this._pedidos = new Proxy(new Pedidos(), {
            
            get(target, prop, receiver) {
            
                if(typeof(target[prop]) == typeof(Function) && ['adiciona', 'esvazia']
                    .includes(prop)) {
                        
                        return function() {
                            console.log(`"${prop}" disparou a chamada`);
                            target[prop].apply(target, arguments);
                            self._pedidosView.update(target);
                        }

                } else {

                    return target[prop];
                }
            }
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
        this._mensagem.texto = 'Pedido adicionado com sucesso';
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
        this._mensagem.texto = 'Pedidos apagados com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}