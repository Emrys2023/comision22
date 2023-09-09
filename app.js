const autosImportados = require("./autos")

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente) {
      const resultado = this.autos.find(function(auto) {
         return auto.patente === patente;
      })
      if (!resultado){
         return null
      } 
      return resultado
   },

   venderAuto: function(patente) {
      const vender = this.buscarAuto(patente)
      if (vender === null) {
         return "La patente no existe"
      }
      return vender.vendido = true    
   },

   autosParaLaVenta: function() {
      const sinVender = this.autos.filter((auto) =>!auto.vendido  ) 
      return sinVender
   },
   
   autosNuevos: function() {
      const paraVender = this.autosParaLaVenta()
      ceroKm = paraVender.filter((auto) => {
         if (auto.km < 100) {
            return auto
         }
      })   
      return ceroKm   
   },   

   listaDeVentas: function() {
    const importeVentas = this.autos.filter(auto => auto.vendido) 
    const vendidos = importeVentas.map((auto) => auto.precio) 
    return vendidos     
 },

 totalDeVentas: function() {
    const totalVentas = this.listaDeVentas()
    if (totalVentas.length !== 0) {
        const resultado = totalVentas.reduce((num, acum) => num + acum)    
        return resultado    
    }
     return 0   
 },

 puedeComprar: function (auto, persona) {
    if (+auto.precio == +persona.capacidadDePagoTotal && +persona.capacidadDePagoEnCuotas == (+auto.precio / +auto.cuotas)) {
       return true
    }
    return false
 },
 
 autosQuePuedeComprar: function () {
    const autosParaVender = this.autosParaLaVenta();
    return autosParaVender
 }   
}

console.log(concesionaria.autosQuePuedeComprar());