# Musico Decentralized Music Platform - Frontend

## Overview

The Musico platform offers a decentralized way to enjoy and monetize music through blockchain technology. Our frontend provides a seamless user experience, allowing listeners to enjoy music and earn rewards, while creators can tokenize their content and engage with their audience. The frontend interacts with various smart contracts deployed on the blockchain to provide these functionalities.

## Features

### 1. User Authentication
- **Login/Signup**: Users can sign up and log in to the platform.
- **Wallet Integration**: Connect wallets (e.g., MetaMask) to interact with the blockchain.

### 2. Music Streaming
- **Browse Music**: Explore and play music tracks available on the platform.
- **Personal Playlists**: Create and manage personal playlists.
- **Recommendations**: Get music recommendations based on listening history.

### 3. Rewards System
- **Earn Rewards**: Listeners earn MusicoTokens (MUSI) for listening to music.
- **Creator Earnings**: Creators get paid based on the engagement their content receives.

### 4. NFT Marketplace
- **Mint NFTs**: Creators can mint their audio content as NFTs.
- **Buy/Sell NFTs**: Users can buy and sell music NFTs on the marketplace.
- **NFT Display**: View and manage owned NFTs.

### 5. Governance
- **Submit Proposals**: Token holders can submit proposals for platform changes.
- **Vote on Proposals**: Participate in the governance by voting on proposals.

### 6. Cross-Chain Functionality
- **Token Transfer**: Transfer MusicoTokens between different blockchains using cross-chain functionality.

## Project Structure

### 1. Public Folder
Contains assets like images, fonts, and icons used in the application.

- `public/_redirects`
- `public/logo.png`
- `public/fonts/`
- `public/icons/`
- `public/images/`

### 2. Src Folder
Contains the source code for the frontend.

- `src/App.tsx`: Main application component.
- `src/main.tsx`: Entry point for the React application.
- `src/style.scss`: Global styles.

### 3. Assets
Contains additional assets like styles and images.

### 4. Components
React components for various parts of the application.

- `src/components/genres/`
- `src/components/header/`
- `src/components/hero/`
- `src/components/player/`
- `src/components/playlists/`
- `src/components/shared/`

### 5. Features
Redux slices for state management.

- `src/features/playlistSlice.jsx`
- `src/features/tokenSlice.jsx`
- `src/features/tracksStatus.jsx`

### 6. Pages
Different pages in the application.

- `src/pages/auth/`: Authentication related pages.
- `src/pages/dashboard/`: User dashboard.
- `src/pages/landing-page/`: Landing page for the application.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MetaMask or any Web3 wallet
