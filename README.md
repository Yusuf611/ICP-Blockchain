# Voting Project

This project is a decentralized voting system built on the Internet Computer (ICP) blockchain. The backend is implemented in Motoko, and the frontend uses plain HTML and JavaScript (Vanilla JS).


## Running the project locally

If you want to test your project locally, you can use the following commands:

# Starts the local Internet Computer replica, running in the background
dfx start --background

# Deploys your canisters to the local replica and generates your Candid interface
dfx deploy

Once the deployment completes, your application will be available at http://localhost:4943?canisterId={asset_canister_id}. Replace {asset_canister_id} with the actual asset canister ID provided by the dfx deploy command.

If you have made changes to your backend canister, you can generate a new Candid interface with:

-> npm run generate
This command regenerates the Candid interface and should be run before starting the frontend development server. It will also run automatically every time you run dfx deploy.

If you are making frontend changes, you can start a development server with:

-> npm start
This command starts a server at http://localhost:8080, proxying API requests to the local replica at port 4943.

-> Note on frontend environment variables
If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

Set 'DFX_NETWORK' to 'ic' if you are using Webpack.
Use your own preferred method to replace process.env.DFX_NETWORK in the autogenerated declarations.
Setting canisters -> {asset_canister_id} -> declarations -> env_override to a string in dfx.json will replace process.env.DFX_NETWORK with the string in the autogenerated declarations.
Write your own createActor constructor.
Backend Code (Motoko)
The backend code is written in Motoko and is located at src/voting_project_backend/src/Voting.mo. Here is a brief overview of the backend functionality:

### Summary

- **Running the project locally**: The instructions explain how to start the local Internet Computer replica, deploy canisters, and start the frontend development server.
- **Backend Code**: The backend Motoko code for managing topics and votes.
- **Frontend Code**: HTML and JavaScript files for the user interface.

Documentation  
 [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)



