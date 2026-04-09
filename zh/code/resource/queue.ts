// #添加一个自定义队列任务（防止阻塞主线程渲染）
import { Resource } from 'leafer-ui'

async function doSomething() {
    // 执行队列任务
}

// 添加队列任务
Resource.queue.add(async () => await doSomething())

// 如果队列被卡住，可以调用 stop 强制结束队列，不影响后续添加任务的执行。
Resource.queue.stop()