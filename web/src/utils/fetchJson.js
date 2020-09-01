/************************************ 封装fetch网络请求 ************************************/
export default async function fetchJson(url, option) {
  try {
    // 1. 接收header
    let res = await fetch(url, option);
    // 2. 接收body
    let data = await res.json();
    // 3. 返回数据
    return data
  } catch(e) {
    // 1. 打印异常信息并抛出
    console.log("错误：", e);
    throw new Error(e);
  }
}
