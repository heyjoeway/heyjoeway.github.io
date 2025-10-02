export default interface Profile {
    experience?: {
        [key: string]: number[] | null;
    },
    skills?: {
        [key: string]: string[] | null;
    }
}