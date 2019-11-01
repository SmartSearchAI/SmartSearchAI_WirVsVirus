export class Pairwise_Compare {

  Entities: Array<Entity>;
  Ratings: Array<Array<Number>>;

  constructor(Entities: Array<Entity>){
    this.Entities = Entities;
    this.Ratings = new Array(Entities.length);
    this.Ratings.forEach(element => {
      this.Ratings.push(new Array(Entities.length));
    });
  }

  GetQuestions(Random: Boolean = true){
    let quesitons: Array<Question> = new Array<Question>();
    this.Entities.forEach((entity, i) => {
      this.Entities.forEach((col,j) => {
        let component: Question;
          if(i == j){
            component = new Rank(this.Entities[i]);
          } else {
            component = new Compare(this.Entities[i], this.Entities[j], i < j);
          }
          quesitons.push(component);
      })
    });
    if(Random){
      quesitons.sort(function() {
        return .5 - Math.random();
      });
    }

    return quesitons;
  }
};

export class Entity {
  Name: String;
  constructor(Name: String){
    this.Name = Name;
  }
}
/**
 * Questions to be representet by the input elements
 */
export class Question{
  Text: String;
  Short: String;
  Value: Number;
  constructor(Text: String, Short: String = ""){
    this.Text = Text;
    this.Short = Short;
    this.Value = -1;
  }
}
export class Compare extends Question {
  Left: Entity;
  Right: Entity;
  Rating: Number;
  constructor(Left: Entity, Right: Entity, Direction: Boolean){
    if(Direction){
      super(`Where do you perform better?`, `Performance`);
    } else {
      super(`Where is improvement needed?`, `Improvement`);
    }    
    this.Left = Left;
    this.Right = Right;
  }
}

export class Rank extends Question{
  Rating: Number;
  Entity: Entity;
  Min: Number;
  Max: Number;
  constructor(entity: Entity, Rating: Number = 9){
      super(`Are you familiar with ${entity.Name}?`, `Familarity`);
      this.Min = 1;
      this.Max = 9;
      this.Entity = entity;
  }
}