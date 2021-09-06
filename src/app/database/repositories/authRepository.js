const dbContext = require('../dbContext');

exports.authenticate = async (email, password) => {
    const user = await dbContext('User')
        .select('*')
        .where('Email', email)
        .andWhere('Password', password)
        .first();

    if (user)
        return {
            id: user.Id,
            name: user.Name,
            email: user.Email,
            phone: user.Phone,
            type: user.Type,
            createdAt: user.CreatedAt
        };

    return null;
}

exports.createUser = async user => {
    return await dbContext('User')
        .insert({
            Name: user.name,
            Email: user.email,
            Phone: user.phone,
            Password: user.password,
            Type: user.type,
            CreatedAt: user.createdAt
        }).returning('*');
}