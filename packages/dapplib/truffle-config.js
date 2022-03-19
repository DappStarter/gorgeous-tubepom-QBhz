require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remind modify give clog bridge sure'; 
let testAccounts = [
"0xf63df0edb354fe3cd4e5544a7b9d686708625a8f3622621be4c4d692cee57412",
"0x8559383ed98884f5809c338094279eb51f866e6459d642d320855adae8683de8",
"0x787e2967589181875daba34971a51101ede70ade869a944d2218964ee6977bfa",
"0x8e340d5040bef0f4a88795fff7ec5ef3b306c9959c96602700b2ec39535deee9",
"0xb6705691108da9b07c115416aef60c0f8713e7ad15f0d12504101651ae84fc00",
"0xbd35044571eb5416740f653fddaeecf276ae9f4a6dd6619e43f21b1eb610e4c5",
"0x03786d5409de0eacfe991bcea3f3eeb474c7e9f8964fefb6981f89aa21c4d68b",
"0x4484bfb0572ea482deb0fdf785d7ed06102e93f2289bb76777bd6ce0c2e0f308",
"0xec74349a4c60873ff9e0a60780fe905f6a3def3d2359333fef08ff516c0dcfdd",
"0x75466f983245bad663b6e3517114767463ccdf4360181151bb45142287b107bf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


