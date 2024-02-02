######################################
#                                    #
#   STOP THE COUNT / BOT ARBITRAGE   #
#        Louis Simon Alban           #
#                                    #
######################################

#But du projet : 
Le projet est réalisé sous la forme d'un POC.
Développer un bot permettant de réaliser des arbitrages de crypto monaies
sur différentes plateformes et en tirer des bénéfices grâce à la méthode
du flash loan ou "prêt express". 

#URL :
NOTION : https://www.notion.so/Stop-the-count-bot-arbitrage-787a25556a074f79b9335a3c70bbfe70
Fichier problèmes: https://github.com/SannierAlban/Flash-Loan-aave/blob/main/Problemes.md
Flash loan contract deployed at: 0xbd82c10B70c405Da987b44d1c1A253d0ce318219

#Technologies utilisées

- Python pour le script principal avec les libraries ccxt
- Solidity pour écrire les smart contract (normalement appelés par le script Python)
- Electron comme framework d'application 

#Etapes du projet

- Nous avons commencé par implémenter les API de différentes plateformes 
dans le but de récupérer les prix en USDT des crypto monaies désirées.
Pour réaliser ces opérations il est nécessaire d'installer ccxt

 - pip install ccxt 

La formule pour réaliser un arbitrage vaut :  
Profit Brut= (QteAchetee * PrixVentePlateforme2) - (QteAchetee * PrixAchatPlateforme1)
ProfitNet = ProfitBrut - (Frais)

- La prochaine étape consistait donc à récupérer les différents frais via les API.

- Après rélfexion nous nous sommes rendu compte que nous n'allions pas utiliser de
  smart contract car tout été faisable en python via les api et nos clés privées.
  Nous avons donc changé d'idée pour créer des smart contract et passer par des CEX Crypto Exchange Centralisés.

- Second constat, l'utilisation de flash loan sur les CEX (Binance, CryptoCom, Kraken) n'est pas possible nous avons donc opté pour utiliser les DEX (Décentralisés) comme Uniswap.

- Pour tester les échanges en local nous avons installé ganache mais nous avons rencontré des problèmes sur le déploiement
  du serveur test et de l'utilisation de ganache-cli. Le but aurait été d'utiliser ganache pour simuler une block chain
  et utiliser cette block chain pour réaliser des flash loan. 







