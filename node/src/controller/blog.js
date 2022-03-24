const {exec} =require("../db/mysql")


// 获取博客列表（可以根据author或keyword进行筛选）
const getList =(author,keyword)=>{
    // 注意此处sql语句中where 1=1的妙用以及拼接时后面要流出空格
   let sql =`select * from blogs where 1=1 `

   if (author){
    sql +=`and author='${author}' `
   }
   if (keyword){
       sql+=`and title like '%${keyword}%' `
   }

   sql +=`order by createtime desc;`

   //返回promise
   return exec(sql)
}

// 获取博客详情页（根据id）
const getDetail =(id) =>{
   const sql =`select * from blogs where id='${id}'`
   return exec(sql).then(rows=>{
    //    这里就是返回的对象数组的第一个（其实也只会有一个，所以这里相当于做一层分离）
       return rows[0]
   })
}

// 新建博客
const newBlog =(blogData ={})=>{
    // 此处给参数赋值是es6新语法，即不存在blogData时赋值为空，存在时仍未原值
    // blogData是一个博客对象，包含title content 等属性
    // console.log("blogData .....",blogData)
    const title =blogData.title;
    const content =blogData.content;
    const author =blogData.author;
    const createtime =Date.now();

    const sql =`
        insert into blogs (title,content,createtime,author)
        values ('${title}','${content}',${createtime},'${author}')
    `
    return exec(sql).then(insertData =>{
        console.log("insertData is ",insertData);
        return {
            id:insertData.insertId
        }
    })
}

// 更新博客
const updataBlog =(id,blogData ={}) =>{
    // id就是要更新博客的id
    // console.log("updataBlog ....",id,blogData);

    const title =blogData.title;
    const content =blogData.content;

    const sql =`
        update blogs set title='${title}',content='${content}' where id=${id}
    `
    return exec(sql).then(updateData=>{
        console.log("updateData is ",updateData);
        if (updateData.affectedRows >0){
            return true
        }
        return false
    })
}

// 删除博客
const delBlog =(id,author)=>{
    // id就是要删除博客的id
    const sql =`delete from blogs where id='${id}' and author='${author}'`

    return exec(sql).then(delData=>{
        if (delData.affectedRows >0){
            return true
        }
        return false
    })
}
module.exports ={
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delBlog
}