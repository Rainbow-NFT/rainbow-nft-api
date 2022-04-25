import { ethers } from 'ethers'
import { AlchemyProvider } from '@ethersproject/providers'
import SvgBitpack from '../abi/SvgBitpack.json'
import 'dotenv/config'

// Imports from .env
const API_KEY = process.env.ALCHEMY_KEY;

// Contract Address on Rinkeby
const CONTRACT_ADDRESS = "0xce4346e22dD8288D2971416d29E99DB22385E0A4";

// Set network
const NETWORK = "rinkeby"
// set provider from infura & network
const provider = new AlchemyProvider(NETWORK, API_KEY);

// Setup interface for RainbowNFT Contract
const rainbow = new ethers.Contract(CONTRACT_ADDRESS, SvgBitpack.abi, provider);

// Get current token Id
export const _currentTokenId = async () => {
  return await rainbow.currentTokenId();
}

export const totalSupply = async () => {
  return await rainbow.TOTAL_SUPPLY();
}

export { rainbow }
