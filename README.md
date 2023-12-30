<h1 align="center">Backend for Frontend NextJS</h1>
<!-- <h1 align="center"><img src="" height="60" width="65" alt="" /> NLW 07º HEAT</h1> -->

<p align="center">
    <img src="https://img.shields.io/static/v1?label=DioenD&message=JS&color=d2cca1&labelColor=757780" alt="DioenD">
    <img src="https://img.shields.io/static/v1?label=bff&message=FullCycle&color=cece08&labelColor=31312e" alt="FullCycle">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DioenDJS/Backend-for-Frontend-NextJS" >
</p>

## Tecnologias Utilizadas no projeto :construction:

- [NextJS](https://nextjs.org/docs/getting-started/installation) <img align="center" alt="img_React" height="20" width="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="max-width:100%;" />

## Projeto :computer:
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/ec982d94-8c0a-4440-9a79-5a8a2b1345d4)
https://whimsical.com/3beh1L5HbHXH36KzQMBtzt

Projeto . Desenvolver...


## Como o projeto foi criado 

> ``` yarn create next-app --typescript ```

como rodar o projeto 
>```yarn run dev```
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/c4dafa45-9cdf-4131-a692-1089b20c96bd)

como rodar a api products
>```yarn run api-products```
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/fe6b502e-2566-41bd-8c56-80168dd7224b)

como rodar a api reviews
>```yarn run api-reviews```
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/0f83061b-37a1-4bc1-9514-fdc38aa4ef85)

# Testes Postman
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/43151fa7-4cc6-4cde-a100-f55074e5a665)
>```{
	"info": {
		"_postman_id": "d8db92de-3272-4b20-8ed8-e94e31baca8e",
		"name": "Backend for Frontend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "24184407"
	},
	"item": [
		{
			"name": "API Reviews",
			"item": [
				{
					"name": "Reviews All",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8002/reviews",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"reviews"
							]
						}
					},
					"response": []
				},
				{
					"name": "Reviews by id Product",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8002/reviews/?product_id=4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8002",
							"path": [
								"reviews",
								""
							],
							"query": [
								{
									"key": "product_id",
									"value": "4"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "API Products",
			"item": [
				{
					"name": "Products All",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8001/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8001",
							"path": [
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "Products by id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8001/products/?id=4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8001",
							"path": [
								"products",
								""
							],
							"query": [
								{
									"key": "id",
									"value": "4"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Product All",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Product by id",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Product by Reviews",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/products/4/reviews",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"4",
						"reviews"
					]
				}
			},
			"response": []
		}
	]
}```
## Requesições as APIs externas :
### API Reviews :
####  - Listagem de Reviews
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/51c7a3ed-0799-4ae0-b32c-9c6ba0335175)

####  - Busca de Reviews por product_id
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/954857c7-192b-496a-a80f-8d4e10223e43)

### API Products :
####  - Listagem de Products
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/76191db7-186d-48bf-8594-3eae482c231f)

####  - Busca de Products por id
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/41a835b0-2bc5-46a2-9a81-132345b672a1)

## Requesições a API interna :
### API Products :

####  - Listagem de Products
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/a7891559-0049-4b77-aef2-77632c3a2a85)

####  - Busca de Products por id
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/9f304718-8dba-4eb4-9844-ea69c470b502)

####  - Busca Product e Reviews por id do product
![image](https://github.com/DioenDJS/Backend-for-Frontend-NextJS/assets/76778401/e3358b91-d4af-4ba8-be88-0b4ef7e39dbb)


## Dependências do Projetos :card_index_dividers:


> - Json Server
>
>``` yarn add json-server --dev ```
