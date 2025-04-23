class PedidosView {


    constructor(seletor) {

        this._elemento = document.querySelector(seletor);
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.paraArray().map(pedido =>
                `
                    <tr>
                        <td>${DateConverter.paraTexto(pedido.data)}</td>
                        <td>${pedido.quantidade}</td>
                        <td>${pedido.valor}</td>
                        <td>${pedido.volume}</td>
                    </tr>                        
                `).join('')}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal}</td>            
                </tr>
            </tfoot>
            
        </table>               
        `
    }
}