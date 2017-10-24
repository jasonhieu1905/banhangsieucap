export class RequestUtil {

    public static getUrlSearchParam(value) {
        return new window.URLSearchParams(value);
    }
}