
export default async () => {
    try {
        if (!process.env.POSTGRES_HOST) throw new Error('Postgres host is required!');
        if(!process.env.POSTGRES_PORT) throw new Error('Postgres port is required!');
        if(!process.env.POSTGRES_USER) throw new Error('Postgres user name is required!');
        if(!process.env.POSTGRES_PASSWORD) throw new Error('Postgres password is required');
        if(!process.env.POSTGRES_DB) throw new Error('Postgres database name is required!');
    } catch (error) {
        console.log(error);
    }
}