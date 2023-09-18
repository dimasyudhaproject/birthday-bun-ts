# Birthday Mailer API

This API sends happy birthday messages to users on their birthday at exactly 9 am based on their time zone. It's designed with scalability and reliability in mind.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will guide you on how to set up the project and run on both your local machine for development and testing purposes or your production server.

## Prerequisites

- Bun.sh
- PostgreSQL

You'll also need to set up environment variables. Copy the `.env.example` to `.env` and fill in your database credentials and other required configurations.

## Installation

1. Clone the repository:
```
git clone https://github.com/dimasyudhaproject/birthday-bun-ts.git -b dev birthday
```

2. Navigate to the project directory:
```
cd birthday
```

### A. Local Server

3. Install dependencies:
```
bun i
```

4. Start the server:
```
bun start-dev
```

### B. Production Server

3. Build the app to a Docker image:
```
docker build -t birthday-service:1.0.0 .
```

4. Run the Docker container:
```
docker run -dit -p 3000:3000 --name birthday-service birthday-service:1.0.0
```

OR

3. Install dependencies:
```
bun i --production --frozen-lockfile --verbose
```

4. Build the app:
```
bun build-prod
```

5. Start the server:
```
bun start-prod
```

## Usage

Once the server is running, you can navigate to `http://localhost:3000` to access the API or `http://localhost:3000/api-docs` for the Swagger documentation.

## API Endpoints

- `POST /user`: Register a new user
- `DELETE /user/:id`: Delete a user by ID
- `PUT /user/:id`: Update user details

More details can be found in the Swagger documentation.

## Testing

To run tests, execute:

```
bun test
```

## Error Handling

The API returns appropriate status codes and messages for various error scenarios. Ensure to handle them gracefully in your applications.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](https://github.com/dimasyudhaproject/birthday-bun-ts/CONTRIBUTING.md) for details on our code of conduct and submission process.

## License

This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/dimasyudhaproject/birthday-bun-ts/LICENSE.md) file for details.

## Acknowledgments

- Thanks to Allah SWT