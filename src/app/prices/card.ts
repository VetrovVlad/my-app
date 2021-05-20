enum TypeOfCard{
    Classic,
    Platinum,
    Gold
}

enum TypeCoaching{
    gym,
    boxing,
    backetball,
    swimming,
    fitness,
    yoga,
    tennis
}

export class CoachingCard{
    constructor(
    public Id?:number,
    public TypeOfCard?:TypeCoaching,
    public TypeCoaching?:TypeCoaching,
    public Description?:string,
    public Price?:number
    ){}
}