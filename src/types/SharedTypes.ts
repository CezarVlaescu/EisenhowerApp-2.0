type TTaskType = "DO" | "DECIDE" | "DELEGATE" | "DELETE";

export type TTask = {
    id?: number;
    name: string;
    hour: Date;
    type: TTaskType;
    isCommented: boolean;
    comments? : string;
}

export type ButtonObject = {
    name: string;
    link?: string;
}