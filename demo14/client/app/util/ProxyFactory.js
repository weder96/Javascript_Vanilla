class ProxyFactory {
    
    static create(objeto, props, chamada) {
        
        return new Proxy(objeto, {
             
            get(target, prop, receiver) {
                
                if(ProxyFactory._ehFuncao(target[prop]) 
                    && props.includes(prop)) {
                
                    return function() {

                        console.log(`"${prop}" disparou a chamada`);
                        target[prop].apply(target, arguments);
                        chamada(target);
                    }

                } else {

                    return target[prop];
                }
            },

             set(target, prop, value, receiver) {
                
                 const updated = Reflect.set(target, prop, value);
                 if(props.includes(prop)) chamada(target);
                 return updated;
             }
             
         });
   }

    static _ehFuncao(fn) {

        return typeof(fn) == typeof(Function);
    }
}