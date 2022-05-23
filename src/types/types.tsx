

export interface ITodo {
    id: number;
    task: string;
    auther: string;
    email: string;
    display: boolean;
    onClick: () => void;
}
