 export interface UsersProps {
    name: string,
    email: string,
    designation: string,
    department: string,
    progress?: number,
    status ?: "enrolled" | "unenrolled" | "certified";
 } 
