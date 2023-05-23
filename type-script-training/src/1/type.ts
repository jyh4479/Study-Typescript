export type Person = {
    name: string,
    phone: number,
    mail?: string
}

export interface Person2 {
    name: string,
    phone: number,
    mail?: string
}

// type은 유니온, 튜플을 정의할때 사용함 (interface는 안됨)