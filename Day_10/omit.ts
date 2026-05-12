interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<User, "email" | "password">

const preview: UserPreview = {
    name: "Aryan",
    id: "xyz"
}

// preview.password;