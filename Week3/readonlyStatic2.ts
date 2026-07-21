class Company {
    readonly companyName: string = "Google";
    static location: string = "Bangalore";

    show() {
        console.log(this.companyName);
        console.log(Company.location);
    }
}

let c = new Company();
c.show();