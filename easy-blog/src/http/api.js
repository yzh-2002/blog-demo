// 导出各种api

import requests from "./request"

// 获取文章列表
export const GetArticleList =requests.get("/api/blog/list")