function isTeenager(age, hasPermission) {
    // If the person is under 18 and does not have permission, return false
    if (age < 18 && !hasPermission) {
        return false;
    }
    // If the person is 18 and has permission, return true
    if (age === 18 && hasPermission) {
        return true;
    }
    // If none of the above conditions match, return false
    return false;
}