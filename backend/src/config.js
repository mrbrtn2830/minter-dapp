require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "MANNY THE PANDA";
const description = "Welcome to MANNYVERSE";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Fur1" },
      { name: "Fur2" },
      { name: "Outline" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Outfit" },
      { name: "Head" },
      { name: "Accessories" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://mannysmansion.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'MANNY THE PANDA';
const CONTRACT_SYMBOL = 'MANNY';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x10beC8CBe21557f6cE45A2066f67813468ad9dEb';
const TREASURY_ADDRESS = '0x10beC8CBe21557f6cE45A2066f67813468ad9dEb';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 80; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 20; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-05-01T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-04-20T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 2000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x10beC8CBe21557f6cE45A2066f67813468ad9dEb"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x10beC8CBe21557f6cE45A2066f67813468ad9dEb","0xE01a60B642F337D7B413d19f12E6099A48cd5497","0xD8F45531DcEc31c43Be2b6BD6d2eb7F149c2be30","0x655456DFDaaBC2Ab392D12CE3b3452F59A422744",
"0x716525e329a6Ecf08741b6D06925BcE94A0D8804","0xf1833e52E7325F668333579e85A4939Ba5fD4B19","0x11D662c26dCFc8f0b73Be02A034d46ED9403123D","0xd1DA7Ac3f8201240cf16786D2A0385a73d403C39","0x0ecF5437b8A36942Ab8788E14777bA4Be1906842",
"0xD885D4bBc01Df95199648cCBbF9e845a2817D328","0x770496D4a6a01B3241a993968Ab16c566027cc31","0xa67860a7Ed80cEF040e966906E6Db0B4E4658d87","0x05E805696bC3f951eAff34cD8Ce491C836ec04B2","0x931f9F7F8C358443c31a378AE1376d57C52e52f2",
"0x9E54f00C2e99Fe56b41a4925827116B63bd1AfEa","0x377AE0FDFbAB42621B29AA0AF1624E3D436FE002","0x0098c5163f0E4d04aC6e79749E25f76F89cA3D00","0x91758ED311E5E28ec19852d4Db4EEcc298b4Ef08","0x8a7AA8e7B86056CCDa1932a2241e7BF5feeC228C",
"0x8Fd623dad197739BEe19ec488Ad895999c29dBc4","0xeb8E5Df53866294011EA04C58D51E425f669B11b","0x712670b6318610fD46Af7d6F5F85f28b530bBbab","0xEA05ab57B85C5c88aDF6D3b5816E3A81fD961956","0x090D1B56F7662662FF241501b2faa83dedbF7424",
"0x44a820B1FbcA0381E4d49ee28f6c15555FD10679","0x6ba404d9b7f903e9491ec145ada7248aee0e0b37","0xf1833e52E7325F668333579e85A4939Ba5fD4B19","0x2fB7e356B3DCBF35528A87BBB4119Fb27D170475","0x64eC210E9F7cdC390810309F4Fb3D2D37fBde508",
"0x8bF067DD1aEA1dCBb32321799799760e51373f07","0x43c4925e8a26ad33dc9acc080b043115890cb0ac","0x67FE8FD5ca53B6a39a5Ff60277FA83F672016DA5","0x63Cd49Ddf9fb2575FBDb4cbd4a54d8a50a88d2af","0x640305dE3B8600f8e98b083269eEC78990491cF8",
"0x864c0E9bc29d76A9DB5eb8133EFEA489Ff00C02d","0xf7D2be2cc087C55E230F4a709C09957D69B6D3b4","0xFBDAeD7FC08e1F56EBdA4c923013c9203DaC384F","0xa67860a7Ed80cEF040e966906E6Db0B4E4658d87","0x995eF7143806AcaCf9C40E1C8936d89e7588541F",
"0x931f9F7F8C358443c31a378AE1376d57C52e52f2","0x462d3fABBaa3a31BdDa06505e1C06b67dd506826","0x716525e329a6Ecf08741b6D06925BcE94A0D8804","0x567212Fb1ecAD93322F6923C122970a0842Aa460","0x7E055C1d6B5740AdB881904CB4FE9e6F12f2cf15"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x64d10F2bcb94b8b53aad264E626869D506a8Af02"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "MANNY THE PANDA"; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which MANNY will you be paired with?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeifnaaafvcgymuygqxnb5davkaxem25qpt7kvrmusu3crxpmqxmm5a"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
