export type TTaskType = "DO" | "DECIDE" | "DELEGATE" | "DELETE";

export type TTask = {
    id?: number;
    name: string;
    hour: Date;
    type: TTaskType;
    isCommented: boolean;
    comments? : string;
}

export type TButtonObject = {
    name: string;
    link?: string;
}

export type TRegisterUserInput = {
    username: string;
    email: string;
    password: string;
    image?: string;
}

export type TLoginInput = {
    username: string;
    password: string;
}