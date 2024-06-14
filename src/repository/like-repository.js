import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";
class LikeRepository{
        constructor(){
                super(Like);
        }
}

export default LikeRepository;