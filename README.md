
# Blockstarter

**Fullstack dApp for Ethereum Crowdfunding**

Blockstarter is a full-stack decentralized application (dApp) that allows users to create and participate in crowdfunding campaigns powered by Ethereum smart contracts.

This project showcases full integration between Smart Contracts (Solidity + Foundry), Backend APIs (Nest.js + GraphQL), and a modern Frontend (React + Rsbuild + ethers.js).

---

## 🛠️ Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Smart Contracts | **Solidity**, **Foundry**, **Anvil**  |
| Backend       | **Nest.js**, **GraphQL**, **Prisma**, **PostgreSQL** |
| Frontend      | **React**, **ethers.js**, **Wagmi**, **Zustand**, **TailwindCSS**, **shadcn-ui** |
| Tooling       | **Moonrepo**, **Proto**, **Biome** for linting and formatting |
| Package Manager | **npm** with Workspaces |

---

## ✨ Features

- Ethereum-based crowdfunding smart contract
- Full smart contract deployment with Foundry & Anvil
- Backend API with GraphQL for off-chain operations
- React-based Frontend interacting with the blockchain
- Modern monorepo structure with Moonrepo
- Strong code quality using Biome
- Easily extensible for other blockchain use cases

---

## 📦 Repository Structure

```
blockstarter/
├── apps/
│   ├── backend/          # Nest.js GraphQL API
│   ├── frontend/         # React Frontend with ethers.js
│   └── smart-contracts/  # Solidity Contracts (Foundry)
├── .moon/                # Moonrepo config
├── package.json          # Root scripts and workspaces
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) `22.16.0`
- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- [Moonrepo](https://moonrepo.dev/)
- [Proto](https://moonrepo.dev/docs/getting-started/quickstart)

---

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Run Smart Contract Environment (Anvil)

```bash
cd apps/smart-contracts
anvil
```

In another terminal, deploy the contract:

```bash
forge script script/Counter.s.sol --rpc-url http://127.0.0.1:8545 --broadcast --private-key YOUR_PRIVATE_KEY
```

---

### 3. Run Backend & Frontend with Moonrepo

At project root:

```bash
moon run :dev
```

This will start:

- Backend at [http://localhost:4000/graphql](http://localhost:4000/graphql)
- Frontend at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Code Quality & Linting

Biome is configured for code formatting and linting across all projects:

```bash
moon run :lint
moon run :format -- --write
```

---

## 🔗 Smart Contract Details

The contracts are written in Solidity and compiled/deployed with Foundry. The current example is a simple **Counter**, which can be replaced with crowdfunding logic.

---

## 📃 Future Improvements

- Replace example Counter with real Crowdfunding logic
- Unit and integration tests for Smart Contracts
- Persistent database for off-chain campaign data (PostgreSQL)
- Full UI for campaign creation and participation
- Deploy to testnet

---

## 🧑‍💻 About

This project demonstrates full-stack Web3 skills, including:

✅ Smart Contract development with Foundry  
✅ React dApp development with ethers.js  
✅ API development with Nest.js and GraphQL  
✅ Modern monorepo management with Moonrepo  
✅ Focus on code quality with Biome  
✅ Clean architecture ready for production expansion  

---

## ⚡ License

This project is licensed under the ISC License.

---
