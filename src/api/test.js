import request from "@/utils/request";
import config from "@/config";
export function test_weather(para) {
    return request({
        url: `${config.BASE_API}/jztk/query`,
        methods: 'get',
        params: para
    })
}
