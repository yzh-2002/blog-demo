class BaseModel {
    constructor (data,message){
        if (typeof data ==='string'){
            // 当我们仅传入message时（data就会是string，此处即为兼容此情况）
            this.message =data;
            data =null;
            message =null;
        }
        if (data){
            this.data =data;
        }
        if (message){
            this.message =message;
        }
    }
}

class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errnum =0
    }
}

class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message);
        this.errnum =-1;
    }
}

module.exports ={
    SuccessModel,
    ErrorModel
}