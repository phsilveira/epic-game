const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ['Tiririca', 'Viralata caramelo', 'Zeca Pagodinho'],
		[
			"QmbTguy5bwGVHAfj7f6cndxE3ivbTYCsGhxNGyTibnvJhS",
			"QmTG8X8ssdFgGw5NBPzECSu3FPb2Prmyp7JpXXzjAapBFR",
			"QmYhTyzVFMCCoTbfbevmNpx9EemxApcv3MXGZamsrxudGc",
		],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Capitão Nascimento",
		"QmTAmLezdUXmvZFhhhmbondkSCMb3asGGMK5KxKysVg4en",
		10000,
		50
  );
  let txn;
  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // pega o valor da ur da nft 
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
