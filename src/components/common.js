import { toast } from "react-toastify";
import { config } from "./config";
export const common = {
    notify(type, msg) {
        toast.dismiss();
        switch (type) {
            case "S":
                toast.success(msg, config.elements.toast);
                break;
            case "W":
                toast.warning(msg, config.elements.toast);
                break;
            case "E":
            case "E":
                toast.error(msg, config.elements.toast);
                break;
            case "I":
                toast.info(msg, config.elements.toast);
                break;
            case "M":
                toast(msg, config.elements.toast);
                break;
        }
    },
}