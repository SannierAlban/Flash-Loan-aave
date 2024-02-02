# Méthodologie d'Arbitrage
## Identification des Opportunités
Les opportunités d'arbitrage étaient identifiées en définissant manuellement un seuil de profit. Ce seuil était basé sur des critères tels que la différence de prix minimale nécessaire pour couvrir les frais de transaction et générer un profit net. Les critères supplémentaires pourraient inclure la liquidité des actifs et la volatilité du marché, afin d'optimiser la sélection des opportunités les plus viables.

## Flash Loans avec Aave
Les défis techniques ont été le principal obstacle en raison d'une familiarité limitée avec l'écosystème crypto. La complexité de la documentation et le dépannage de ces problèmes ont nécessité une courbe d'apprentissage abrupte. Néanmoins, nous avons réussi à déployer un contrat permettant de contracter et de rembourser un flash loan sur un testnet sepolia.

## Stratégies d'Arbitrage sur DEX
L'exploration des stratégies d'arbitrage sur des DEX, en particulier via des échanges de stablecoins dans des pools de Curve, présente plusieurs avantages :

Réduction des Risques de Volatilité : L'utilisation de stablecoins minimise l'exposition à la volatilité des cryptomonnaies, rendant les opérations d'arbitrage moins risquées.
Efficiences des Pools de Liquidité : Les pools de Curve, conçus pour les stablecoins, offrent souvent de meilleures conditions d'échange et des frais plus bas, maximisant ainsi les profits d'arbitrage.

## Résultats et Enseignements
Les principaux enseignements tirés de ce POC incluent :

Importance de l'Analyse Technique : Une compréhension des API et des contrats intelligents.
Sélection Stratégique des Opportunités : La définition de critères clairs pour l'identification des opportunités d'arbitrage.
Potentiel des Flash Loans : Les flash loans offrent un moyen puissant de tirer parti des différences de prix sans capital initial.

## Perspectives Futures
La prochaine étape consistera à développer un bot capable d'utiliser des flash loans de Balancer v2, une plateforme qui, selon les recherches, présente un potentiel pour l'arbitrage par rapport à Aave.
