export interface Moment{
    id?: number,
    name: string,
    email: string,
    data: string,
    title: string,
    description: string,
    image: string,
    created_at?: string,
    update_at?: string,
    comments?: [{text: string, username: string, created_at?: string }],

}