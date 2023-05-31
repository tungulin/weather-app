export interface IWrapAppProps {
    children: string | JSX.Element | JSX.Element[]
}

export interface ILocationState {
    pathname?: string;
    search?: string;
    hash?: string;
}