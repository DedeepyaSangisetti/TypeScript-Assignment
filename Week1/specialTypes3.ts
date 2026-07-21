let result: any = 25;
console.log(result);

result = "Success";
console.log(result);

let status: unknown = "Completed";

if (typeof status === "string") {
    console.log(status.toLowerCase());
}

function printStatus(): void {
    console.log("Task Completed");
}

printStatus();