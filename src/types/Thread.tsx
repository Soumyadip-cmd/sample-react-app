type Thread = {
    ID: number
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Username: string;
    Category : string;
    Title: string;
    Content: string;
}

export default Thread;