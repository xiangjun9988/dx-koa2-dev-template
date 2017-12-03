// const Mock = require("mockjs")
// const Random = Mock.Random;
const Mock = require("mockjs")

/* 模拟测试数据 */
function mockUserInfo(){
    const data = Mock.mock({
        "userName": '@name',     //模拟名称
        "age|1-100": 100,          //模拟年龄(1-100)
        "color": "@color",    //模拟色值
        "date": "@date('yyyy-MM-dd')",  //模拟时间
        "url": "@url()",     //模拟url
        "content": "@cparagraph()" //模拟文本
    })
    return data;
}

/* 自动生产数据 */
function generatorData() {
    var temp = [];
    for (var i = 0; i < 10; i++) {
        var obj = {
            "productId": i,
            "type": "LLDPE",
            "marknum": "18D",
            "company": "大庆石化",
            "num": Math.random() > 0.5 ? "有货" : "无货",
            "address": "广州",
            "sendway": "配送",
            "updatetime": Math.floor(Math.random() * 60),
            "price": 10000 + Math.ceil(Math.random() * 10000),
            "updown": Math.random() > 0.5 ? "↑50" : "↓50"
        };
        temp.push(obj);
    }
    return temp;
}

/* 塑云点电商接口数据 */

function suyunData(){
    let productList = generatorData();
    let data = {
        "seller": {
            "login": {
                "code": 0,
                "data": {
                    "userId": 1,
                    "password": 123123
                }
            },
            "searchList": {
                "code": 0,
                "data": [{
                    "productName": "道恩集团",
                    "productId": 1
                },
                {
                    "productName": "拉丝PP",
                    "productId": 2
                },
                {
                    "productName": "注塑PP",
                    "productId": 3
                },
                {
                    "productName": "共聚纤维PP",
                    "productId": 4
                },
                {
                    "productName": "低压pp",
                    "productId": 5
                },
                {
                    "productName": "工程塑料",
                    "productId": 6
                },
                {
                    "productName": "橡胶苯酚",
                    "productId": 7
                },
                {
                    "productName": "线性高压",
                    "productId": 8
                }
                ]
            },
            "searchList_2": {
                "code": 0,
                "data": [{
                    "productName": "7050H",
                    "productId": 1
                },
                {
                    "productName": "2426H",
                    "productId": 2
                },
                {
                    "productName": "L5E89",
                    "productId": 3
                }
                ]
            },
            "banners": {
                "code": 0,
                "data": [{
                    "img": "../assets/img/banner_1.png"
                }

                ]
            },
            "selectgrops": {
                "code": 0,
                "data": [{
                    "selectid": 1,
                    "selectVal": "拉斯"
                },
                {
                    "selectid": 2,
                    "selectVal": "注塑"
                },
                {
                    "selectid": 3,
                    "selectVal": "共聚纤维"
                }
                ]
            },
            "placegrops": {
                "code": 0,
                "data": [{
                    "placeid": 1,
                    "placeVal": "龙口"
                },
                {
                    "placeid": 2,
                    "placeVal": "青岛"
                },
                {
                    "placeid": 3,
                    "placeVal": "烟台"
                }
                ]
            },
            "productList": {
                "code": 0,
                "total": 500,
                "data": productList
            },
            // "productList": {
            //   "code": 0,
            //   "data": [{
            //       "productId": 1,
            //       "type": "LLDPE",
            //       "marknum": "18D",
            //       "company": "大庆石化",
            //       "num": "有货",
            //       "address": "广州",
            //       "sendway": "配送",
            //       "updatetime": "5分钟前",
            //       "price": "20000",
            //       "updown": "↑50"
            //     },
            //     {
            //       "productId": 2,
            //       "type": "LLDPE",
            //       "marknum": "18D",
            //       "company": "大庆石化",
            //       "num": "自提",
            //       "address": "广州",
            //       "sendway": "配送",
            //       "updatetime": "1分钟前",
            //       "price": "11080",
            //       "updown": "↑50"
            //     },
            //     {
            //       "productId": 3,
            //       "type": "LLDPE",
            //       "marknum": "18D",

            //       "company": "大庆石化",
            //       "num": "无货",
            //       "address": "广州",
            //       "sendway": "配送",
            //       "updatetime": "2分钟前",
            //       "price": "10050",
            //       "updown": "↓50"
            //     }
            //   ]
            // },
            "errorRemind": {
                "code": 400,
                "msg": "业务错误"
            },
            "page": {
                "code": 0,
                "data": {
                    "totalCount": 3,
                    "pageSize": 2,
                    "totalPage": 2,
                    "currPage": 1,
                    "list": [{
                        "id": 1,
                        "name": "candy1",
                        "version": 1,
                        "creameTime": null,
                        "success": true
                    },
                    {
                        "id": 2,
                        "name": "candy2",
                        "version": 1,
                        "creameTime": null,
                        "success": true
                    }
                    ]
                }
            }


        }
    }

    return data;
}

module.exports = {
    mockUserInfo: mockUserInfo,
    suyunData: suyunData
};