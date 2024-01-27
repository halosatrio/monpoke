namespace Pokemon {
  type BaseList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: BaseName[];
    status: boolean;
    message: string;
  };

  type Ability = {
    ability?: BaseName;
    is_hidden?: boolean;
    slot?: number;
  };
}
