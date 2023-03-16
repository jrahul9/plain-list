import PlainListService from "../services/PlainListService.js";

class PlainListController {
    
    constructor() {
        this.plainListService = new PlainListService();
    }
    
    fetchPlainList = async (req, res) => {
        try {
            const token = req?.headers?.token || req?.body?.token;
            const data = await this.plainListService.fetchPlainList(token);
            return res.status(200).json(data);
        } catch (err) {
            console.error(`[fetchPlainList] erorr: ${err}`);
            return res.status(400).json({ messsage: err?.messsage ?? err });
        }
    };
}

export default PlainListController;