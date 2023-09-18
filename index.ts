import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import sequelize from './src/configs/PostgresDatabase';
import { swaggerSpec } from './src/configs/SwaggerUI';
import userRoutes from './src/routes/UserRoute';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Successfully connected to the database.');
        
        const APP_PORT = process.env.APP_PORT || 3000;
        app.listen(APP_PORT, () => {
            console.log(`Server started on port ${APP_PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    });

app.on('error', (error) => {
    console.error('Error starting the server:', error);
    process.exit(1);
});