
export interface SEARCH {
    placeholder: string;
    width: '100%' | '80%' | '50%';
    search: string;
    handleSearch: (value: string) => void;
    searching: boolean;
}