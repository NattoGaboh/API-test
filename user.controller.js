const User = {
    get: (req,res) =>{
        res.status(200).send('Este es un dato!')
    },
    list: (req,res) =>{
        res.status(200).send('Listar Endpoint!!')
    },
    create: (req,res) =>{
        res.status(201).send('Creando Endpoint!!')
    },
    update: (req,res) =>{
        res.status(204).send('Actualizando Endpoint')
    },
    destroy: (req,res) =>{
        res.status(204).send('Eliminando Endpoint!! :C ')
    }
}

module.exports = User