interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    address: {
        city: string;
        state: string;
        country: string;
        zip: string;
    },
    skills: Object;
}

const u1: User = {
    id: 0,
    name: "Aryan",
    email: "",
    age: 0,
    address: {
        city: "",
        state: "",
        country: "",
        zip: ""
    },
    skills: {
        java: {
            spring: "low"
        }
    }
}

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
}

function deepUpdate(target: any, source: any) {
    for(const key in source) {
        if(source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepUpdate(target[key], source[key]));
        }
    }
    return { ...target, ...source };
}

function updateUser(existingUser: User, updates: Partial<Omit<User, "id">>) {
    return { ...existingUser, ...updates }
}
const updatedUser = updateUser(u1, {email: "xyz@gmail.com", age: 23})
console.log(updatedUser);

const updates: DeepPartial<User> = {
    address: {
        country: "India"
    }
}

const uUser = deepUpdate(u1, {address: {
        country: "India",
        zip: "005"
    }, skills: {
        java: {
            spring: "high"
        }
    }});
// console.log(uUser);