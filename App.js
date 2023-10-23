import React from "react";
import ReactDOM from "react-dom/client";

/**
 * App Layout
 * Header
 * - Logo
 * - Nav Itmes
 * Body
 * - Search bar
 * - RestaurantContainer
 * - Restaurant Card
 *    - image
 *    - Restaurant Name,Cuisines
 *    - Rating, Delivery Time
 * Footer
 * - Copywrite
 * - Links
 * - Contact
 */


const resList = [
   {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "80321",
            "name": "Paradise Confectioner",
            "cloudinaryImageId": "fokome10nmswqvenkanm",
            "locality": "Hashimpur Road",
            "areaName": "Balson Chauraha",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Pizzas",
              "Burgers",
              "Snacks"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "80321",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3600
            },
            "parentId": "155099",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "promoted": true,
            "adTrackingId": "cid=8928855~p=1~eid=0000018b-5c2a-c1e2-4d01-957b005a0130~srvts=1698058387938~83656",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "ABOVE ₹1000",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=80321&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "374814",
            "name": "Cake N Bake",
            "cloudinaryImageId": "xhwo1kgivbti8uwj2zvz",
            "locality": "Moti Lal Nehru road",
            "areaName": "Katra",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 3.6,
            "veg": true,
            "feeDetails": {
              "restaurantId": "374814",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2600
            },
            "parentId": "54978",
            "avgRatingString": "3.6",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=8928933~p=2~eid=0000018b-5c2a-c1e2-4d01-957c005a0257~srvts=1698058387938~83656",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=374814&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "532913",
            "name": "DK Cake & Bakery",
            "cloudinaryImageId": "csmakyjgmjpr7t85szap",
            "locality": "Salori",
            "areaName": "Katra",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Bakery"
            ],
            "veg": true,
            "feeDetails": {
              "restaurantId": "532913",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2100
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2100
            },
            "parentId": "320676",
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 21:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=532913&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "80697",
            "name": "Occasion",
            "cloudinaryImageId": "h8r9sqoakfyfhb0cuiew",
            "locality": "Mumfordganj",
            "areaName": "Katra",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Bakery",
              "Snacks",
              "Desserts"
            ],
            "avgRating": 3.6,
            "veg": true,
            "feeDetails": {
              "restaurantId": "80697",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2100
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2100
            },
            "parentId": "150888",
            "avgRatingString": "3.6",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹75 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=80697&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "186001",
            "name": "Kunj Paneer Kendra The Cake Palace",
            "cloudinaryImageId": "admk1hewzozwrhoyemvv",
            "locality": "Moti Lal Nehru Road",
            "areaName": "Katra",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "Bakery"
            ],
            "avgRating": 3.5,
            "veg": true,
            "feeDetails": {
              "restaurantId": "186001",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 2600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 2600
            },
            "parentId": "121939",
            "avgRatingString": "3.5",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=186001&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "442053",
            "name": "Sweet Truth",
            "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
            "locality": "Stanley Road",
            "areaName": "Civil Lines",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Snacks",
              "Bakery",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
              "restaurantId": "442053",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4100
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4100
            },
            "parentId": "4444",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 6.1,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "6.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=442053&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "425017",
            "name": "Thornhill Bakers",
            "cloudinaryImageId": "xtmvrxaxa2i3lh0kazsy",
            "locality": "Thornhill Road",
            "areaName": "Civil Lines",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Sweets"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "425017",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4100
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4100
            },
            "parentId": "236818",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:20:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=425017&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "102150",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Sardar Patel Marg",
            "areaName": "Civil Lines",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
              "restaurantId": "102150",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4100
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4100
            },
            "parentId": "5588",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 6.7,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "6.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 21:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                },
                "imageBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=102150&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "301323",
            "name": "BAKERY 24x7",
            "cloudinaryImageId": "awhm7qfbnf16jqbccu55",
            "areaName": "Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Bakery"
            ],
            "feeDetails": {
              "restaurantId": "301323",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5600
            },
            "parentId": "3817",
            "avgRatingString": "--",
            "sla": {
              "deliveryTime": 45,
              "lastMileTravel": 8.6,
              "serviceability": "SERVICEABLE",
              "slaString": "45 mins",
              "lastMileTravelString": "8.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-24 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=301323&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "289035",
            "name": "The Baking Co. by El Chico Since 1964",
            "cloudinaryImageId": "y8zn4ovmybmps7ph4lac",
            "locality": "Attarsuiya",
            "areaName": "Kareli",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "289035",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6600
            },
            "parentId": "453288",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 9.3,
              "serviceability": "SERVICEABLE",
              "slaString": "35 mins",
              "lastMileTravelString": "9.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-10-23 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=289035&source=collection&query=Cakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
]
const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg" />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
}

const RestaurantCard = (resData) => {
   // console.log(resData.resData.card.card.info);
   console.log(resData);
   const {info} = resData?.resData?.card?.card;
   const {sla} = info;
   // console.log(resData.resData.card.card);
   // console.log(resData.resData.card.card.info);
   // for( const key in resData.resData.card.card.info){
   //    console.log(key + " " + info[key])
   // }
   // console.log(data);
   const {name, cuisines, areaName, avgRating, cloudinaryImageId} = info;
   const {deliveryTime} = sla;
   return (
      <div className="res-card">
         <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
         <h3 className="res-name">{name}</h3>
         <span className="rating" style={{"font-weight" : "bold"}}>{avgRating} star</span>
         <span className="delivery-time" style={{"font-weight" : "bold"}}>{deliveryTime} minutes</span>
         <h4 className="cuisine" >{cuisines.join(", ")}</h4>
         <h4 className="location" >{areaName}</h4>

      </div>
   );
}
const Body = () => {
   return (
      <div className="body">
         <div className="search">
            <input className="search-box" />
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
<linearGradient id="-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1" x1="31.916" x2="25.088" y1="31.849" y2="26.05" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#b2b2b2"></stop><stop offset=".999"></stop></linearGradient><polygon fill="url(#-2suTD81jP2ew0CFO8L6Qa_p8VkXMjDOpcE_gr1)" points="29.976,27 24.451,27.176 33.95,36.778 36.778,33.95"></polygon><path fill="#b2b2b2" d="M24.313,27c-1.788,1.256-3.962,2-6.313,2c-6.075,0-11-4.925-11-11S11.925,7,18,7s11,4.925,11,11	c0,2.659-0.944,5.098-2.515,7h4.776C32.368,22.909,33,20.53,33,18c0-8.284-6.716-15-15-15S3,9.716,3,18c0,8.284,6.716,15,15,15	c4.903,0,9.243-2.363,11.98-6H24.313z"></path>
</svg>
         </div>
         <div className="res-container">
            {
               resList.map(function (restaurant) {
                  return <RestaurantCard key={restaurant.card.card.info} resData={restaurant}/>
               })
            }
         </div>
      </div>
   );
}
const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
         {/* Footer */}
      </div>
   );
}
const root = ReactDOM.createRoot(document.getElementsByClassName('cont')[0]);

root.render(<AppLayout />); // by seeing angular bracket the Babel came to know that this is a Component


