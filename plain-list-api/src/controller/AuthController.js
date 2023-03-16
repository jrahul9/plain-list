import AuthService from "../services/AuthService.js";

class AuthController {

    constructor() {
        this.authService = new AuthService();
    }
    
    generateToken = async (req, res) => {
        try {
            const data = await this.authService.generateToken();
            return res.status(200).json(data);
        } catch (err) {
            console.error(`[fetchPlainList] erorr: ${err}`);
            return res.status(400).json({ messsage: err?.messsage ?? err });
        }
    };
}

export default AuthController;