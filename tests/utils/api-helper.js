export async function apiLogin(request) {
    return await request.post('/api/login', {
        data: {
            username: 'standard_user',
            password: 'secret_sauce'
        }
    });
}