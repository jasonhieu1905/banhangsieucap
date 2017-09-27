export class RequestUtil {

    public static getUrlSearchParam(value) {
        let params = new URLSearchParams();

        for (var key in value) {
            if (value.hasOwnProperty(key))
                params.set(key, value[key]);
        }
        return params;
    }
}