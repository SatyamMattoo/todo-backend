class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

export const error=(err,req,res,next)=>{
    message= err.message || "Internal server errror";
    code= err.statusCode || 404;

    res.status(code).json({
        success: false,
        message
    })
}

export default ErrorHandler;