const { registerUser, loginUser, googleLoginService } = require("../service/authService");
const asyncHandler = require("../utils/asyncHandler");

const registerController = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const result = await registerUser({ name, email, password });

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        data: result
    })
});

const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const result = await loginUser({ email, password });

    res.status(200).json({
        success: true,
        message: "User Loged In Successfully",
        data: result
    });
});

const googleLoginController=asyncHandler(async(req, res)=>{
    const {token}=req.body;
    const result=await googleLoginService(token);

    res.status(200).json({
        success: true,
        message: "Google Login Successful",
        data: result
    })
})

module.exports = { registerController, loginController, googleLoginController };