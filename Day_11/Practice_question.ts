// ===============================
// 1. GENERIC FETCH UTILITY
// ===============================

/*
Goal:
Build a reusable API helper that returns strongly typed data.

Concepts Used:
- Generic Types
- async/await
- Error handling
*/

async function getApiData<T>(endpoint: string): Promise<T> {

    const result = await fetch(endpoint);

    if (!result.ok) {
        throw new Error(`Failed Request: ${result.status}`);
    }

    return await result.json() as T;
}

interface MusicAlbum {

    userId: number;
    id: number;
    title: string;
}

async function runAlbumExample() {

    const api = "https://jsonplaceholder.typicode.com/albums/1";

    const albumInfo = await getApiData<MusicAlbum>(api);

    console.log("1. Album Details");
    console.log("Album Number:", albumInfo.id);
    console.log("Album Name:", albumInfo.title);
}

runAlbumExample();


// ===============================
// 2. RECORD TYPE CONFIGURATION
// ===============================

/*
Goal:
Create permission settings for every user role.
*/

console.log("\n2. Permission Configuration");

enum UserRole {

    SuperAdmin = "SuperAdmin",
    Writer = "Writer",
    Visitor = "Visitor"
}

const accessControl: Record<UserRole, boolean> = {

    SuperAdmin: true,
    Writer: true,
    Visitor: false
};

for (const item in accessControl) {

    console.log(`${item}: ${accessControl[item as UserRole]}`);
}


// ===============================
// 3. COMPLETE UNION CHECKING
// ===============================

/*
Goal:
Handle every possible status safely.
*/

console.log("\n3. Status Handler");

type OrderState =
    | "Pending"
    | "Processing"
    | "Delivered";

function processOrder(state: OrderState) {

    switch (state) {

        case "Pending":
            console.log("Order is Pending");
            break;

        case "Processing":
            console.log("Order is Being Processed");
            break;

        case "Delivered":
            console.log("Order Delivered Successfully");
            break;

        default:

            const neverReached: never = state;

            return neverReached;
    }
}

processOrder("Pending");
processOrder("Processing");
processOrder("Delivered");


// ===============================
// 4. RECURSIVE TREE STRUCTURE
// ===============================

/*
Goal:
Represent nested directory structures.
*/

console.log("\n4. Recursive Directory Model");

type Directory = {

    folder: string;

    documents?: string[];

    children?: Directory[];
};

const rootDirectory: Directory = {

    folder: "Application",

    documents: ["main.ts"],

    children: [

        {
            folder: "Pages",
            documents: ["home.ts"]
        },

        {
            folder: "Services",
            documents: ["api.ts"]
        }
    ]
};

console.log(JSON.stringify(rootDirectory, null, 2));


// ===============================
// 5. TEMPLATE STRING TYPES
// ===============================

/*
Goal:
Allow only valid spacing formats.
*/

console.log("\n5. CSS Size Units");

type PaddingUnit =
    | `${number}px`
    | `${number}em`
    | `${number}%`;

const paddingA: PaddingUnit = "20px";

const paddingB: PaddingUnit = "5em";

console.log("Padding A:", paddingA);
console.log("Padding B:", paddingB);


// ===============================
// 6. CONDITIONAL TYPES + infer
// ===============================

/*
Goal:
Extract value types from Promise.
*/

console.log("\n6. Promise Type Extraction");

type ExtractPromise<T> =

    T extends Promise<infer R>
        ? R
        : T;

type Result1 = ExtractPromise<Promise<boolean>>;

type Result2 = ExtractPromise<string>;

console.log("Promise<boolean> => boolean");
console.log("string => string");


// ===============================
// 7. UNION TYPE FILTERING
// ===============================

/*
Goal:
Filter union values using utility types.
*/

console.log("\n7. Union Utilities");

type KeyboardActions =
    | "enter"
    | "escape"
    | "click"
    | "hover"
    | "scroll";

type PointerActions =
    Extract<KeyboardActions, "click" | "hover">;

type NonScrollActions =
    Exclude<KeyboardActions, "scroll">;

const pointer1: PointerActions = "click";
const pointer2: PointerActions = "hover";

console.log("Pointer Actions:");
console.log(pointer1);
console.log(pointer2);

console.log("\nActions Without Scroll:");

const actionA: NonScrollActions = "enter";
const actionB: NonScrollActions = "escape";

console.log(actionA);
console.log(actionB);


// ===============================
// 8. SAFE ASYNC WRAPPER
// ===============================

/*
Goal:
Prevent async functions from crashing app flow.
*/

console.log("\n8. Async Error Wrapper");

function withSafety<T extends (...args: any[]) => Promise<any>>(callback: T) {

    return async (...params: Parameters<T>) => {

        try {

            return await callback(...params);

        } catch (err) {

            console.error("Caught Error:", err);

            return undefined;
        }
    };
}

async function unstableTask() {

    throw new Error("Unexpected Failure");
}

const protectedTask = withSafety(unstableTask);

protectedTask();


// ===============================
// 9. INDEX SIGNATURE EXAMPLE
// ===============================

/*
Goal:
Allow flexible object properties.
*/

console.log("\n9. Dynamic Object Properties");

interface ProfileInfo {

    joinedAt: Date;

    [prop: string]:
        | string
        | number
        | boolean
        | Date;
}

const profile: ProfileInfo = {

    joinedAt: new Date(),

    nickname: "Alex",

    points: 150,

    premiumUser: true
};

console.log(profile);


// ===============================
// 10. KEY REMAPPING TYPES
// ===============================

/*
Goal:
Transform object keys into API response format.
*/

console.log("\n10. API Key Transformation");

interface Phone {

    brand: string;
    version: string;
}

type BackendPayload<T> = {

    [P in keyof T as
        `API_${Uppercase<string & P>}`]: T[P];
};

type PhonePayload = BackendPayload<Phone>;

const phoneData: PhonePayload = {

    API_BRAND: "Apple",

    API_VERSION: "iPhone 15"
};

console.log(phoneData);