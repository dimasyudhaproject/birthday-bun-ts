import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Birthday API',
            version: '1.0.0',
            description: 'API to send birthday wishes',
        },
        servers: [
            {
                url: `${process.env.APP_URL || 'http//localhost'}:${process.env.APP_PORT || 3000}`,
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);