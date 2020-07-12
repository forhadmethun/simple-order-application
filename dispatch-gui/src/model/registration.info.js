export class RegistrationInfo {
    constructor(firstName, lastName, company, username, password, phone, offerCode, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.lastName = lastName;
        this.company = company;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.offerCode = offerCode;
        this.country = country;
    }

    isValid() {
        return (this.firstName && this.lastName && this.username && this.password);
    }

    getRequestBody() {
        return {
            "firstName": this.firstName,
            "secondName": this.lastName,
            "companyName": this.company,
            "emailAddress": this.username,
            "password": this.password,
            "phoneNumber": this.phone,
            "trafficSource": this.offerCode,
            "country": this.country
        }
    }
}