// #添加一个自定义异步任务（导出图片时会等待此任务执行完再导出）
import { Resource } from 'leafer-ui'

async function doSomething() {
    // 执行异步任务
}

// 添加异步任务
Resource.tasker.add(async () => await doSomething())