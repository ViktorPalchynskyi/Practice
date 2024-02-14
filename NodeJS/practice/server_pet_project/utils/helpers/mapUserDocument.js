module.exports = function mapUserDocument(document) {
    return {
        id: document.id || document._id,
        name: document.name,
        surname: document.surname,
        email: document.email,
        salt: document.salt,
        password: document.password,
    };
};
