import { getAPI } from "./fetcher"
import ServerService from './server'

getAPI().then(data => {
    mainCallback(data)
})

const mainCallback = (data: any) => {
    const appBody = document.querySelector('[front-role="app-body"]')
    let b = new ServerService(data)

    appBody.innerHTML = `
        <style>
            .items {
                margin: auto;
                width: 400px;
            }
            .item + .item {
                margin-top: 20px;
            }
            .item {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                padding: 10px;
                border: 1px solid silver;
                box-sizing: border-box;
            }
            .item > * {
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
            }
            .item > * + * {
                width: 100%;
                margin-top: 5px;
            }
            .item > *:nth-child(odd) {
                background: #f1f1f1;
            }
        </style>
        <div>
            <ul class="items">
            ${b.serversList().map(item => {
                return `<li class="item">
                            <div>server id: ${item.id}</div>
                            <div>server name: ${item.serverName}</div>
                            <div>server group: ${item.serverGroup}</div>
                            <div>server rate: ${item.rate}</div>
                            <div>server rate: ${item.uptime}</div>
                        </li>`
            }).join('')}
            </ul>
        </div>
    `
}
