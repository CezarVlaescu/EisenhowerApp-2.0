import { TTask } from "./SharedTypes";

export const tasks: TTask[] = [
    {
        id: 1,
        name: "Complete Report",
        hour: new Date(2024, 6, 30, 9, 0),
        type: "DO",
        isCommented: false
    },
    {
        id: 2,
        name: "Decision Meeting",
        hour: new Date(2024, 6, 30, 10, 0),
        type: "DECIDE",
        isCommented: true,
        comments: "Discussed the new project direction."
    },
    {
        id: 3,
        name: "Delegate Tasks",
        hour: new Date(2024, 6, 30, 11, 0),
        type: "DELEGATE",
        isCommented: false
    },
    {
        id: 4,
        name: "Delete Old Files",
        hour: new Date(2024, 6, 30, 13, 0),
        type: "DELETE",
        isCommented: true,
        comments: "Cleared out obsolete project files."
    },
    {
        id: 5,
        name: "Lunch Break",
        hour: new Date(2024, 6, 30, 12, 0),
        type: "DO",
        isCommented: false
    },
    {
        id: 6,
        name: "Strategy Planning",
        hour: new Date(2024, 6, 30, 15, 0),
        type: "DECIDE",
        isCommented: false
    },
    {
        id: 7,
        name: "Assign Roles",
        hour: new Date(2024, 6, 30, 16, 0),
        type: "DELEGATE",
        isCommented: true,
        comments: "Assigned roles for the new project."
    },
    {
        id: 8,
        name: "Remove Redundant Code",
        hour: new Date(2024, 6, 30, 14, 0),
        type: "DELETE",
        isCommented: false
    },
    {
        id: 9,
        name: "Code Review",
        hour: new Date(2024, 6, 30, 17, 0),
        type: "DO",
        isCommented: true,
        comments: "Reviewed the latest PRs."
    },
    {
        id: 10,
        name: "End of Day Wrap-Up",
        hour: new Date(2024, 6, 30, 18, 0),
        type: "DO",
        isCommented: false
    }
];