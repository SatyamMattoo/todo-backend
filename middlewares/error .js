class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

export const error=(err,req,res,next)=>{
    err.message= err.message || "Internal server errror";
    err.statusCode= err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}

export default ErrorHandler;