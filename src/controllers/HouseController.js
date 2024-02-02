import House from '../models/House';
import User from '../models/User';

class HouseController{

  async index(req, res){
    //a variavel de get que estou enviando no formulario, retorna tds casa como true. status = true
    const { status } = req.query;

    const houses = await House.find({ status });

    return res.json(houses);
  }

  async store(req, res){
    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return res.json(house);
  }

  async update(req, res){
    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    //Pega o id usuario logado
    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    // o _id é o id do usuario logado house.user é o id do usuario que criou a casa
    if(String(user._id) !== String(houses.user)){
      return res.status(401).json({ error: 'Não autorizado.'});
    }

    //Pega a propriedade _id e verifica com user_id
    //
    await House.updateOne({ _id: house_id  }, {
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });    
    
    return res.send();
  }

  async destroy(req, res){
    //nome da propiedade que esta sendo enviada
    const { house_id } = req.body;
    //usuario que consta logado
    const { user_id } = req.headers;

    //Pega o id usuario logado
    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    // verifica se o _id é o id do usuario logado && house.user é o id do usuario que criou a casa
    if(String(user._id) !== String(houses.user)){
      return res.status(401).json({ error: 'Não autorizado.'});
    }

    await House.findByIdAndDelete({ _id: house_id});

    return res.json({message: "Excluida com sucesso!" });
  }

}

export default new HouseController();