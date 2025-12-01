# Midnight Launchpad

<div align="center">

[![Midnight Network](https://midnight.network/brand-hub/logo-dark.svg)](https://midnight.network)

[![Compact](https://img.shields.io/badge/Compact-Language-blue?style=for-the-badge)](https://docs.midnight.network)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)

*A Decentralized Crypto Launchpad on the Midnight Blockchain - showcasing its capabilities with its privacy preserving smart contract, Compact.*

</div>

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technical Architecture](#technical-architecture)
- [Project Structure & Components](#project-structure--components)
- [Getting Started](#-getting-started)
- [Compact Language & Smart Contract](#compact-language--smart-contract)
- [NFT Module Integration](#nft-module-integration)
- [Development & Testing](#-development--testing)
- [Why This Project Matters](#why-this-project-matters)
- [Documentation](#documentation)
- [Documentation & Resources](#documentation--resources)
- [Contributing](#contributing)
- [License](#-license)

### Documentation & Guides

- [Contract Guide](packages/contracts/kitties/README.md)
- [API Reference](packages/api/kitties/README.md)
- [CLI Usage Guide](packages/cli/kitties/README.md)

## Project Overview

**Midnight Launchpad** is a compliant and privacy-preserving decentralized crypto launchpad, inpired by **Polkastarter**. It demonstrates the capabilities of the **Midnight blockchain** ecosystem and its smart contract, **Compact**, showing how it ensures privacy (and offers selective disclosure) with compliance and gives users control over their data.

### Key Features

- **Compact Language Learning** - A practical example of building with Midnight's Compact programming language
- **Full-Stack Application** - Web UI, CLI tools, APIs, and testing framework

## Technical Architecture

This project shows how different components work together in the Midnight ecosystem:

```
  ┌─────────────────────┐    ┌─────────────────────┐
  │    Web Frontend     │    │    CLI Interface    │
  │                     │    │                     │
  │ • React + Material  │    │ • Interactive Menu  │
  │ • Wallet Connect    │    │ • Contract Deploy   │
  │ • Real-time State   │    │ • Breeding Tools    │
  │ • Gallery View      │    │ • Market Operations │
  └─────────────────────┘    └─────────────────────┘
           │                          │
           └──────────────────────────┘
                        │
             ┌─────────────────────┐    ┌─────────────────────┐
             │   Unified API       │◄──►│   Smart Contract    │
             │                     │    │                     │
             │ • Ledger Integration│    │ • Compact Language  │
             │ • State Management  │    │ • NFT Integration   │
             │ • Type Safety       │    │ • Breeding Logic    │
             │ • Browser/Node.js   │    │ • Marketplace Logic │
             └─────────────────────┘    └─────────────────────┘
                       │                          ▲
          ┌────────────────────────────┐          │
          │       Proof Server         │──────────┘
          │ (Executes smart contract   │
          │  circuits)                 │
          └────────────────────────────┘
                       │
          ┌────────────────────────────┐
          │      Midnight Network      │
          └────────────────────────────┘
```

## Project Structure & Components

### Core Applications
- **`apps/web/`** - React web application featuring:
  - Interactive projects interface - where users can interact with every launched project
  - Midnight Lace wallet integration
  - Real-time contract state synchronization
  - Responsive UI design

### Smart Contracts
- **`packages/contract/`** - Compact language implementation:
  - Token generation mechanics
  - Create public and private token sale algorithm
  - Fund sale logic - _private and public_
  - Refund contribution logic 
  - Claim tokens logic - _sale organiser only_

### API Layer  
- **`packages/api/`** - Unified API abstraction:
  - Cross-platform compatibility (Browser/Node.js)
  - Provider pattern for blockchain interactions
  - Type-safe contract bindings
  - Transaction management utilities

### Development Tools
- **`packages/cli/`** - Comprehensive CLI toolkit:
  - Contract deployment and management
  - Interactive create, fund, refund and claim actions
  - Development environment utilities
  - Testing and debugging tools

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **Yarn** package manager
- **Midnight Lace Wallet** (for web interface)

### Quick Installation
```bash
# Clone and install dependencies
git clone https://github.com/techmartins72/Midnight-Decentralized-Launchpad.git
cd Midnight-Decentralized-Launchpad
yarn install

# Build all packages
yarn build
```

### 🌐 Web Application
```bash
# Launch the React frontend
yarn start
# Access at http://127.0.0.1:8080/
```

### 💻 CLI Operations  
```bash
# Interactive CLI with testnet (external proof server)
yarn kitties-cli-remote

# CLI with integrated proof server
yarn kitties-cli-remote-ps
```

**CLI Features:**
- 🚀 Deploy new midnight launchpad
- 🏬 Create public and private sale
- 🧬 Fund a sale project
- 🧬 Request refund from a sale previously participated in
- 💰 Receive contributed tokens - _for sale organisers only_
- 📊 View public ledger state (sale info, super admin, TVL)
- 🔏 View private state (participated sale info: allocation, contribution, claimedAllocation & sale id)

## Compact Language & Smart Contract

This project is a practical demonstration of the Midnight smart contract, **Compact**. The smart contract demonstrates how to create, manage, transfer and store tokens on the Midnight Network.

### Smart Contract Architecture

This project demonstrates how to work with external NFT modules from the [`midnight-contracts`](https://github.com/riusricardo/midnight-contracts) repository:

### What This Approach Provides:
- **Time Saving** - No need to implement standard NFT functionality from scratch
- **Reliability** - Uses tested NFT implementations as a foundation
- **Modularity** - Clean separation between standard and custom functionality  
- **Learning** - Shows how to build on existing Midnight infrastructure

## Documentation

- [Contract Development Guide](packages/contract/README.md)
- [API Reference](packages/api/README.md)
- [CLI Usage Guide](packages/cli/README.md)

## Contributing

This project welcomes contributions and questions from anyone interested in learning about Midnight development:

### How to Contribute:
- **Ask Questions** - Open issues if anything is unclear
- **Report Bugs** - Help improve the codebase
- **Suggest Improvements** - Ideas for better examples or documentation
- **Add Examples** - More test cases or usage examples
- **Improve UI** - Make the interface more user-friendly

### Development Process:
1. Fork the repository
2. Create a feature branch
3. Implement changes with tests
4. Ensure all checks pass
5. Submit a pull request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ **Free to use** in personal and commercial projects
- ✅ **Free to modify** and distribute
- ✅ **Free to use** in proprietary software
- ⚠️ **No warranty** - provided "as is"
- 📝 **Attribution required** - must include the original license and copyright notice

---

**Built with ❤️ for the Midnight ecosystem**

_Empowering developers to build compliance and privacy-first applications with confidence._

---

<div align="center">

[🌐 Midnight Network](https://midnight.network) • [📚 Documentation](https://docs.midnight.network) • [💬 Community](https://discord.gg/midnight)

</div>
