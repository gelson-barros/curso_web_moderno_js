// Uma factory retorna um novo Objecto
module.exports = () =>{
    return {
        valor: 1,
        inc(){
            this.valor++ 
        }
    }
}