# EmPower Wellness
EmPower Wellness. A Hult Prize Startup based on SDG 3 of the UNSDGs.

Created by the following individuals:
- Anamitra Roy
- Niladri Bhowmick
- Pritam Das
- Sarin Sanyal

This is a MERN stack monorepo project with separate frontend (Vite + React) and backend (Express) applications.

## Features

- **Frontend**: Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).
- **Backend**: Built with [Express](https://expressjs.com/) for API handling.
- **Monorepo Setup**: Managed using [pnpm](https://pnpm.io/) workspace for managing dependencies across multiple apps.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>=16.x)
- [pnpm](https://pnpm.io/) (>=7.x) for managing dependencies

### Installation



1. If you don't have pnpm installed:
   
   Install `pnpm` globally using `npm`:

   ```bash
   npm install -g pnpm
   ``` 
   
   To confirm it’s installed, check the version:
   
   ```bash
   pnpm -v
   ```
   
2. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern-monorepo.git
   cd mern-monorepo
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```
   - For the frontend:

     ```bash
     cd apps/client
     pnpm install
     ```

   - For the backend:

     ```bash
     cd apps/server
     pnpm install
     ```
     
4. Run the debugging locally:

   - For the frontend:

     ```bash
     cd apps/client
     npm run dev
     ```

   - For the backend:

     ```bash
     cd apps/server
     npm run dev
     ```

5. Access the frontend at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Deployment

To deploy the frontend and backend separately on Vercel, each app has its own deployment configuration. 

- Frontend: [Vercel Deployment Guide](https://vercel.com/docs)
- Backend: [Vercel Deployment Guide](https://vercel.com/docs)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Key Sections:
- **Overview**: Brief description of the project.
- **Features**: Highlights the key tech stack.
- **Getting Started**: Instructions for setting up the project locally.
- **Deployment**: Information on how to deploy both frontend and backend separately on Vercel.
- **Contributing**: Steps for others to contribute to the project.
- **License**: License information.

You can update the Vercel deployment section with links specific to your project once you deploy it. Let me know if you'd like to customize it further!
