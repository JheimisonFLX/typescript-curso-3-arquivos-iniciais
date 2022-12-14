export function domInjector(seletor) {
    return function (target, propertykey) {
        console.log(`Modificando protype ${target.constructor.name} e adcionando getter para a propriedade  ${propertykey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertykey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map