export function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^(?:\+91[\s-]?)?\d{10}$/;
    return phonePattern.test(phoneNumber);
}